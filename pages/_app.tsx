import '../styles/globals.css'

import React, { useState, useEffect} from 'react'

export const getStaticProps = async () => {
  
}

const searchForRecipes = async (query:string): Promise<any> => {
  const result = await fetch(`https://api.spoonacular.com/recipes/716429/information?apiKey=${process.env.API_KEY}&includeNutrition=true`)
  
  return(await result.json())
}

function MyApp() {
  const [recipeFound, setRecipeFound] = useState([])
  const [recipeSearch, setRecipeSearch] = useState('')


  
  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target;
    // const input = form.querySelector('#searchText')
  }

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(recipeSearch)
      const response = await searchForRecipes(query)
      setRecipeFound(response)
   })();
    
  })
  


  return (
    <div className='App'>https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true
      <h1 className='Header'> Recipe Search</h1>
      <form className='searchForm' onSubmit={ event => search(event)}>
        <input className='searchText' type="text" />
        <button className='btn'>Search</button>
      </form>
    </div>
  );
}

export default MyApp
