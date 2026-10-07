import type { Request, Response } from "express";
import { prisma } from "../database/db.ts";

export const getRecipes = async (req: Request, res: Response) => {
    try {
        const recipes = await prisma.recipe.findMany();
        res.json(recipes);
    } catch (error) {
        res.status(400).json({ message: "Failed to retrieve recipes", error: error instanceof Error ? error.message : String(error) });
    }
};

export const getRandomRecipe = async (req: Request, res: Response) => {
    try {
        const count = await prisma.recipe.count();
        if (count == 0) {
            return res.status(404).json({ message: "No recipes found" });
        }
        const randomIndex = Math.floor(Math.random() * count);
        const recipe = await prisma.recipe.findFirst({ skip: randomIndex });
        res.json(recipe);
    } catch (error) {
        res.status(400).json({ message: "Failed to retrieve a random recipe", error: error instanceof Error ? error.message : String(error) });
    }
}

export const createRecipe = async (req: Request, res: Response) => {
    try {
        const recipes = await prisma.recipe.create({
            data: req.body,
        });
        res.status(201).json(recipes);
    } catch (error) {
        res.status(400).json({ message: "Failed to create recipe", error: error instanceof Error ? error.message : String(error) });
    }
}

export const getRecipeById = async (req: Request, res: Response) => {
    try {
        const recipe = await prisma.recipe.findUnique({
            where: { id: Number(req.params.id) },
        }); 
        if (!recipe) {
            res.status(404).json({ message: "Recipe not found" });
            return;
        }
        res.json(recipe);
    } catch (error) {
        res.status(400).json({ message: "Failed to retrieve recipe", error: error instanceof Error ? error.message : String(error) });
    }
};

export const updateRecipe = async (req: Request, res: Response) => {
    try {
        const recipe = await prisma.recipe.update({
            where: { id: Number(req.params.id) },
            data: req.body,
        });
        res.json(recipe);
    } catch (error) {
        res.status(400).json({ message: "Failed to update recipe", error: error instanceof Error ? error.message : String(error) });
    }
};

export const deleteRecipe = async (req: Request, res: Response) => {
    try {
        const recipe = await prisma.recipe.delete({
            where: { id: Number(req.params.id) },
        });
        res.json({ message: "Recipe deleted successfully", recipe });
    } catch (error) {
        res.status(400).json({ message: "Failed to delete recipe", error: error instanceof Error ? error.message : String(error) });
    }
};
