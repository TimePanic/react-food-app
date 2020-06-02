import React from 'react'
import Ingredients from './Ingredients.js';
import AllergyInfo from './AllergyInfo.js';
import NutrientsInfoFat from './NutrientsInfoFat.js';
import NutrientsInfoPro from './NutrientsInfoPro.js';
import NutrientsInfoCarbs from './NutrientsInfoCarb.js';
import NutrientsInfoSugar from './NutrientsInfoSugar.js';

const RecipeInfo = ({recipe}) => {

    const { ingredients, healthLabels, url } = recipe.recipe;

    const { CHOCDF, FAT, PROCNT, SUGAR  } = recipe.recipe.totalNutrients;

    return (
        <div>
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
            <h5 className='url'>Click <a href={url} rel="noopener noreferrer" target='_blank'>HERE</a> to see the full recipe and how to make it</h5>
        </div>
    );
};

export default RecipeInfo;