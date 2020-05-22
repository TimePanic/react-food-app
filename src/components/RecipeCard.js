import React from 'react'
import Ingredients from './Ingredients.js';

const RecipeCard = ({recipe}) => {

    const { label, image, calories, ingredients} = recipe.recipe;

    return (
        <div className="recipeCard">
            <h1>{label}</h1>
            <img src={image} alt={label}/>
            <h3>Total calories: {calories.toFixed(0)} kcals</h3>
            <Ingredients ingredients={ingredients} />
        </div>
    );
};

export default RecipeCard;

// Link to how to make it
// Total Nutients (Fat, Carbs and protien) in grams
// Allergy Info