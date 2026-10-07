function RecipesList() {
  return (
    <div className="flex gap-2">

      <div className="card w-1/3 bg-background-100 rounded-2xl p-2 shadow-md">
        <h3>Recipe Name</h3>
        <div className="flex justify-center flex-row gap-2">
          <div className="rounded-xl bg-accent px-2 py-1 text-text text-center text-sm">Serving Size: N/A</div>
          <div className="rounded-xl bg-accent px-2 py-1 text-text text-center text-sm">Prep Time: N/A</div>
          <div className="rounded-xl bg-accent px-2 py-1 text-text text-center text-sm">Cooking Time: N/A</div>
        </div>
        <p>Description of the recipe here something something something</p>
        <button className="bg-primary hover:bg-primary-600 hover:cursor-pointer px-2 py-1 mt-2 rounded-xl">View Recipe</button>
      </div>

    </div>
  )
}

export default RecipesList