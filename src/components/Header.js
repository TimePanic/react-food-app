import React from 'react'

class Header extends React.Component {
    render(){
        return(
            <div className='header'>
                <h1>React Recipe Application</h1>
                <h3>Search a food and find associated recipes</h3>
            </div>
        );
    }
};

export default Header;