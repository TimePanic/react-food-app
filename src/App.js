import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import RecipeCard from './components/RecipeCard.js';
import Alert from './components/Alert';


const App = () => {

  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("");
  const [alert, setAlert] = useState("");
  const [results, setResults] = useState("2");

  const getData = async() => {
    if (query !== "") {
      const apiCall = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=${results}`);
    const data = await apiCall.json();
    console.log(data);
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

  const onChangeRequests = (e) => {
    setResults(e.target.value)
  }

  
    return (
      <div id='app'>
        <Header/>
        <div className='setup'>
          <form className="searchForm" onSubmit={onSubmit}>
            {/* Food Name */}
            <input type="text" id='foodInput' placeholder="Search for food here" autoComplete="off" onChange={onChangeQuery} value={query}/>

            {/* Results */}
            <div className="results">
              <label htmlFor="results">Results:</label>
              <select name="results" id="results" onChange={onChangeRequests}>
                <option value="2" selected>2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type='submit' id='submitButton'>Find Recipes!</button>
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
