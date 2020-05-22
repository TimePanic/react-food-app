import React from 'react';
import './App.css';
import Header from './components/Header.js';
import MainSetup from './components/MainSetup.js'


class App extends React.Component {

  getData = async(e) => {
    e.preventDefault();
    // const query = e.target.elements.query.value;
    // const apiCall = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    // const data = await apiCall.json();

    // console.log(data);
    console.log(process.env.APP_ID);
  };

  render(){
    return (
      <div id='app'>
        <Header />
        <MainSetup
          getData={this.getData}
        />
      </div>
    )
  }
}

export default App;
