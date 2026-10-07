import { Field, Fieldset, Label, Input, Button } from "@headlessui/react"
import RecipesList from "../components/RecipesList"

export const ViewRecipes = () => {
  return (
    <>
    <div className="bg-background-200 rounded-lg shadow-md p-4 mb-4 text-center">
      <h2 className="font-semibold">View Existing Recipes</h2>
      <div>
        <Fieldset>
          <Field>
            <div className="flex flex-row gap-x-2 mt-2">
              <Input className="block w-4/5 bg-background-50 rounded-lg mx-1 p-2 text-text" placeholder="Find your recipe!" />
              <Button className="bg-primary rounded-lg mx-1 p-2 text-text w-1/5">Search</Button>
            </div>
          </Field>
        </Fieldset>
      </div>

      {/* a whole new component to display recipes */}
      
    </div>
    <div className="bg-background-200 rounded-lg shadow-md p-4 text-center">
      <RecipesList />
    </div>
    
    </>
  )
}
