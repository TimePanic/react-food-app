import React from 'react'

const AllergyInfo = ({healthLabels}) => {

    return healthLabels.map(allergies => {
        return (
            <>
            <ul className="allergyInfo">
            <li>{allergies}</li>
            </ul>
                
            </>
        );
    });
};


export default AllergyInfo;