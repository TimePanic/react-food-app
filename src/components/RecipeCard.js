import React from 'react';
import Ingredients from './Ingredients.js';
import AllergyInfo from './AllergyInfo.js';
import NutrientsInfoFat from './NutrientsInfoFat.js';
import NutrientsInfoPro from './NutrientsInfoPro.js';
import NutrientsInfoCarbs from './NutrientsInfoCarb.js';
import NutrientsInfoSugar from './NutrientsInfoSugar.js';


const RecipeCard = ({recipe}) => {

    const { label, image, calories, ingredients, url, healthLabels, totalTime, source} = recipe.recipe;

    const { CHOCDF, FAT, PROCNT, SUGAR  } = recipe.recipe.totalNutrients;


    return (
            <div className="recipeCard">
                <h1>{label}</h1>
                <img id='recipeImg' src={image} alt={label} />
                <h3>Approx time: {totalTime} mins</h3>
                <h3>Total calories: {calories.toFixed(0)} kcals</h3>
                <h2 className='header'>Ingredients:</h2>
                <Ingredients ingredients={ingredients} />
                <h2 className="header">Allergy Information:</h2>
                <AllergyInfo healthLabels={healthLabels} />
                <h2 className="header">Nutritional Information</h2>
                <div className="nutrition">
                    <NutrientsInfoFat FAT={FAT}/>
                    <NutrientsInfoPro PRO={PROCNT}/>
                    <NutrientsInfoCarbs CARBS={CHOCDF}/>
                    <NutrientsInfoSugar SUGAR={SUGAR}/>
                </div>
                
                <h4>Recipe by: <span id='source'>{source}</span></h4>
                <h5 className='url'>Click <a href={url} rel="noopener noreferrer" target='_blank'>HERE</a> to see the full recipe and how to make it</h5>
            </div>
    );
};

export default RecipeCard;

// Total Nutients (Fat, Carbs and protien) in grams