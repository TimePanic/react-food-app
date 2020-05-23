import React from 'react'

const NutrientsInfoCarbs = ({CARBS}) => {

    return (
        <div className='nutritionInfo'>
        <h1>{CARBS.label}:</h1>
        <h1>{CARBS.quantity.toFixed(1)}{CARBS.unit}</h1>
        </div>
    );
};

export default NutrientsInfoCarbs;