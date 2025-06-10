import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngidientList"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        console.log(ingredients.length)
    }
    
    function toggleRecipeShown() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
    }

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

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
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} ingredientsListItems={ingredientsListItems} toggleRecipeShown={toggleRecipeShown} />}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}
