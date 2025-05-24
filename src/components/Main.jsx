export default function Main() {
    const ingredients = ["Chicken", "Rice", "Broccoli"];

    const ingridentItems = ingredients.map((ingredient, index) => (
        <li key={index}>
            <span>{ingredient}</span>
        </li>
    ));

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        console.log("New ingredient:", newIngredient);
        ingredients.push(newIngredient);
        console.log("Updated ingredients:", ingredients);
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
