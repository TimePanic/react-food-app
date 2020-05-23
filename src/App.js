import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import RecipeCard from './components/RecipeCard.js';


const App = () => {

  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("");
  // const [alert, setAlert] = useState("");

  const getData = async() => {
    const apiCall = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=10`);
    const data = await apiCall.json();
    setRecipe(data.hits);
    console.log(data);
    setQuery("");
    
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  
    return (
      <div id='app'>
        <Header/>
        <div className='setup'>
          <form className="searchForm" onSubmit={onSubmit}>
            <input type="text" placeholder="Search for food here" autoComplete="off" onChange={onChange} value={query}/>
            <button type='submit'>Submit</button>
          </form>
        </div>
        <div className='dashboard'>
          { recipe !== [] && recipe.map(recipe => (
            <RecipeCard recipe={recipe} />
          ))}
        </div>
      </div>

    )
};

export default App;
