import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import RecipeCard from './components/RecipeCard.js';
import Alert from './components/Alert';


const App = () => {

  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("");
  const [alert, setAlert] = useState("");

  const getData = async() => {
    if (query !== "") {
      const apiCall = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=20`);
    const data = await apiCall.json();
      if (!data.more) {
        setAlert("No food found with that name");
      } else {
        setRecipe(data.hits);
        setQuery("");
        setAlert("");
      }
    } else {
      setAlert("Please fill in the form");
    }
    
    
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  const onChangeQuery = (e) => {
    setQuery(e.target.value);
  }

  
    return (
      <div id='app'>
        <Header/>
        <div className='setup'>
          <form className="searchForm" onSubmit={onSubmit}>
            <input type="text" placeholder="Search for food here" autoComplete="off" onChange={onChangeQuery} value={query}/>
            <button type='submit'>&rarr;</button>
          </form>
          {alert!== "" && <Alert alert={alert}/>}
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
