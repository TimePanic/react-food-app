import React from 'react'

const NutrientsInfoPro = ({PRO}) => {

    return (
        <div className='nutritionInfo'>
            <h1>{PRO.label}:</h1>
            <h1>{PRO.quantity.toFixed(1)}{PRO.unit}</h1>
        </div>
    );
};

export default NutrientsInfoPro;