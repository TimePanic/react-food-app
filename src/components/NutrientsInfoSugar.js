import React from 'react'

const NutrientsInfoSugar = ({SUGAR}) => {

    return (
        <div className='nutritionInfo'>
            <h1>{SUGAR.label}:</h1> 
            <h1>{SUGAR.quantity.toFixed(1)}{SUGAR.unit}</h1>
        </div>
    );
};

export default NutrientsInfoSugar;