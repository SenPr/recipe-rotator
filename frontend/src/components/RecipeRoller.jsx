import RecipeViewer from "./RecipeViewer"

function RecipeRoller() {
  return (
    <>
        <div className="bg-background-200 rounded-lg shadow-md p-4 text-center">
            <p className="text-text-600">Got home from your school/work and just feel completely exhausted and hungry, only to realize you don't even have the slightest idea of what to cook or eat?</p>
            <p className="text-text-600 mt-2">Worry no more! Add some recipes into your very own database, then click the big dice below to instantly bring up a recipe you would like to eat!</p>
            {/*
                TODO LIST:
                1. Add handling
                2. Add filter
                */}
            <button className="mt-8 p-4 bg-primary hover:cursor-pointer hover:bg-primary-600 disabled:opacity-40 disabled:cursor-not-allowed rounded-full w-24 h-24 text-4xl shadow-lg transition mx-auto ">🎲</button>
        </div>
        <RecipeViewer />
    </>
  )
}

export default RecipeRoller