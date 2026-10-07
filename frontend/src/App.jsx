import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar.jsx"
import RecipeRoller from "./components/RecipeRoller.jsx"
import { ViewRecipes } from "./pages/ViewRecipes.jsx"

function App() {

  return (
    <div className="min-h-screen bg-background-600">
      <div className="bg-primary-600 w-full py-4">
        <Navbar />
      </div>

      <div className="p-4 max-w-2/3 mx-auto">
        <Routes>
          <Route path="/" element={<RecipeRoller />} />
          <Route path="/view" element={<ViewRecipes />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
