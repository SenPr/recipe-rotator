import { Description, CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Fieldset, Legend, Select, Field, Label, Input, Textarea } from "@headlessui/react"
import { useState } from 'react'

function AddDialog() {
    let [isOpen, setIsOpen] = useState(false)
    const [servingSize, setServingSize] = useState("")
    const [prepTime, setPrepTime] = useState("")
    const [cookTime, setCookTime] = useState("")

    return (
        <>
        <button onClick={() => setIsOpen(true)} className="bg-primary-300 hover:bg-primary-400 border-accent border-2 text-text-500 hover:cursor-pointer rounded-2xl py-2 px-4">
            Add Recipe
        </button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black/40 duration-200 ease-out data-closed:opacity-0"
            />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-lg space-y-4 border bg-background-600 rounded-xl p-12">
                    <form>
                        <Fieldset className="space-y-4">
                            <Legend className="text-lg font-bold">Add Recipe</Legend>

                            {/* Serving Size, Prep Time, Cook Time*/}
                            <div className="grid grid-cols-3 gap-3">
                                <Field>
                                    <Label className="block text-sm font-medium text-text-600">Serving Size</Label>
                                    <Input
                                    type="number"
                                    min="1"
                                    value={servingSize}
                                    onChange={(e) => setServingSize(e.target.value)}
                                    className="mt-1 w-full rounded border border-background-400 bg-background-50 px-3 py-2 text-text-600"
                                    />
                                </Field>

                                <Field>
                                    <Label className="block text-sm font-medium text-text-600">Prep Time</Label>
                                    <div className="relative mt-1">
                                    <Input
                                        type="number"
                                        min="0"
                                        value={prepTime}
                                        onChange={(e) => setPrepTime(e.target.value)}
                                        className="w-full rounded border border-background-400 bg-background-50 px-3 py-2 pr-10 text-text-600"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-text-400">min</span>
                                    </div>
                                </Field>

                                <Field>
                                    <Label className="block text-sm font-medium text-text-600">Cook Time</Label>
                                    <div className="relative mt-1">
                                    <Input
                                        type="number"
                                        min="0"
                                        value={cookTime}
                                        onChange={(e) => setCookTime(e.target.value)}
                                        className="w-full rounded border border-background-400 bg-background-50 px-3 py-2 pr-10 text-text-600"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-text-400">min</span>
                                    </div>
                                </Field>
                            </div>

                            <Field>
                                <Label className="block">Recipe Name</Label>
                                <Input className="block w-full bg-background-200 border-accent-500 border-2" name="recipe_name"/>
                            </Field>
                            <Field>
                                <Label className="block">Ingredients</Label>
                                <Textarea rows={6} className="mt-1 w-full block bg-background-200 border-accent-500 resize-none border-2 overflow-y-auto" name="recipe_ingredients"/>
                            </Field>
                            <Field>
                                <Label className="block">Instructions</Label>
                                <Textarea rows={6} className="mt-1 w-full block bg-background-200 border-accent resize-none border-2 overflow-y-auto" name="recipe_instructions"/>
                            </Field>
                        </Fieldset>
                        <div className="flex justify-evenly py-4">
                            <CloseButton className="bg-red-500 hover:bg-text-700 text-background-50 px-4 py-2 rounded">Close</CloseButton>
                            <button type="submit" className="bg-primary hover:bg-primary-600 text-text rounded px-2 py-2">Submit</button>
                        </div>
                    </form>
                </DialogPanel>
            </div>
            
        </Dialog>
        </>
    )
}

export default AddDialog;