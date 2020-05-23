import React from 'react'

const NutrientsInfoFat = ({FAT}) => {

  return (
      <div className='nutritionInfo'>
        <h1>{FAT.label}:</h1>
        <h1>{FAT.quantity.toFixed(1)}{FAT.unit}</h1>
      </div>
  ) 
};

export default NutrientsInfoFat;