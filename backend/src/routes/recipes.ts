import { Router } from 'express';
import { getRecipes, getRandomRecipe, getRecipeById, createRecipe, updateRecipe, deleteRecipe } from '../controllers/recipes.ts';

const router = Router();

router.get('/', getRecipes);
router.get('/random', getRandomRecipe)
router.get('/:id', getRecipeById);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

export default router;