

function RecipeViewer() {
  return (
    <div className="bg-background-200 rounded-lg shadow-md p-4">
            <div className="flex justify-center gap-4">
                <button className="bg-primary rounded-2xl p-2 hover:cursor-pointer hover:bg-primary-600 shadow-md">Another Recipe</button>
                <button className="bg-secondary rounded-2xl p-2 hover:cursor-pointer hover:bg-secondary-600 shadow-md">Edit</button>
                <button className="bg-red-500 text-text-300 rounded-2xl p-2 hover:cursor-pointer hover:bg-red-600 shadow-md ">Delete</button>
            </div>
            <hr className="my-4 max-w-2/3 border-text-300 mx-auto"></hr>
            <div className="text-center mx-auto">
                <h2 className="text-2xl font-bold">Recipe Name</h2>
                <p>Description</p>
                {/* Servings, cook time, prep time,  */}
                <div className="flex gap-4 my-2 justify-center">
                    <div className="bg-accent-300 rounded-2xl text-text">Serving Size: N/A</div>
                    <div className="bg-accent-300 rounded-2xl text-text">Prep Time: N/A</div>
                    <div className="bg-accent-300 rounded-2xl text-text">Cooking Time: N/A</div>
                </div>
                {/* Ingredients */}
                <div className="mx-auto max-w-1/3">
                    <hr className="border-text-300 my-4"></hr>
                    <h3 className="font-semibold text-xl">Ingredients</h3>
                    <ul className="list-disc list-inside">
                        <li className="text-text-600">Item 1</li>
                    </ul>
                    <hr className="border-text-300 my-4"></hr>
                </div>
                {/* Instructions */}
                <div className="mx-auto max-w-1/3">
                    <h3 className="font-semibold text-xl">Instructions</h3>
                    <ol className="list-decimal list-inside space-y-2 marker:text-text marker:text-xl marker:rounded-full marker:font-bold">
                        <li className="text-text-600">First step</li>
                        <li className="text-text-600">Second step</li>
                        <li className="text-text-600">Third step</li>
                    </ol>
                    <hr className="border-text-300 my-4"></hr>
                </div>
            </div>
        </div>
  )
}

export default RecipeViewer