import { Link } from "react-router"
import AddDialog from "./ui/AddDialog";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Add Recipes", component: "dialog" },
    { label: "View Recipes", href: "/view" }
];

function Navbar() {
  return (
    <div className="max-w-2/3 mx-auto">
        <h1 className="text-2xl font-bold text-center text-text">Recipe Rotator</h1>
        <p className="text-center text-text/80 mt-2">Add your recipes and let fate decides!</p>
        <div className="flex justify-center gap-4 py-2">
            {navItems.map((item) => (
                item.component == "dialog" ? (
                    <AddDialog key={item.label} />
                ) : (
                    <Link
                        key={item.href}
                        to={item.href}
                        className="bg-secondary hover:bg-secondary-600 rounded-2xl py-2 px-4"
                    >
                        {item.label}
                    </Link>
                )
            ))}
        </div>
    </div>
  )
}

export default Navbar