import React, { useState } from 'react';
import RecipeInfo from './RecipeInfo.js';


const RecipeCard = ({recipe}) => {

    const { label, image, calories, source} = recipe.recipe;

    const [show, setShow] = useState(false);


    return (
            <div className="recipeCard">
                <div className='moduleInfo'>
                    
                    <div className='img'>
                        <img id='recipeImg' src={image} alt={label} />
                    </div>

                    <div className='info'>
                        <h1>{label}</h1>
                        <h4>Recipe by: <span id='source'>{source}</span></h4>
                        <h3>Total calories: {calories.toFixed(0)} kcals</h3>
                    </div>
                </div>

                <button id='showMoreBtn' onClick={() => setShow(!show)}>Show full information</button>

                { show && <RecipeInfo recipe={recipe} />}
            </div>
    );
};

export default RecipeCard;

// Total Nutients (Fat, Carbs and protien) in grams