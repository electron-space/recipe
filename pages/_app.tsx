import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState, useEffect} from 'react'

function MyApp() {
  const [recipeFound, setRecipeFound] = useState([])
  const [recipeSearch, setRecipeSearch] = useState('')

  const searchForRecipes = async (query:string): Promise<any> => {
    const result = await fetch(`${query}`)
    return(await result.json()).results
  }
  
  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(recipeSearch)
      const response = await searchForRecipes(query)
      setRecipeFound(response)
   })();
    
  })
  


  return (
    <div className='App'>
      <h1 id='Header'> Recipe Search</h1>
      <form className='searchForm'>
        <input id='searchText' type="text" />
        <button id='btn'className=''>Search</button>
      </form>
    </div>
  );
}

export default MyApp
