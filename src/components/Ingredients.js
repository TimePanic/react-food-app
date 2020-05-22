import React from 'react'

const Ingredients = ({ingredients}) => {

    return ingredients.map(ingredient => {
        return (
            <>
            <ul className="ingredients">
            <li>{ingredient.text}</li>
            </ul>
                
            </>
        );
    });
};

export default Ingredients;