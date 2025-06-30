import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngidientList"
import { getRecipeFromMistral } from "../../ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["Milk", "Eggs", "Flour", "Sugar", "Butter"])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
    
    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }, [recipe])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && 
                <IngredientsList
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}
