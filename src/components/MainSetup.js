import React from 'react'

class MainSetup extends React.Component {
    render(){
        return(
            <>
                <h2>Main Setup</h2>
                <form onSubmit={this.props.getData}>
                    <input type="text" name="query" id="query"/>
                    <button type='submit'>Submit</button>
                </form>
                
            </>
        );
    }
};

export default MainSetup;