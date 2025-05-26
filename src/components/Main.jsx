import React from 'react';

export default function Main() {
    const [ingredients, setingredients] = React.useState(["Chicken", "Rice", "Broccoli"])

    function addingredients() {
        setingredients(prevIngredients => [...prevIngredients, "Test"])
    }

    const ingridentItems = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setingredients(prevIngredients => [...prevIngredients, formData.get('ingredient')]);
        event.currentTarget.reset();
    }

    return (
       <main>
        <form onSubmit={handleSubmit} className="add-ingredient-form">
            <input 
                type="text"
                name="ingredient"
                placeholder="e.g. Oregano"
                aria-label="Add ingredient or recipe"
            />
            <button type="submit">Add Ingredient</button>
        </form>
        <ul className="ingredient-list">
            {ingridentItems}
        </ul>
       </main>
    );
}
