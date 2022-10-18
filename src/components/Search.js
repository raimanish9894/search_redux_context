import React from 'react';
import { useGlobalContext } from './ContextApi';


const Search = () => {
  const {query, searchStory} = useGlobalContext();
  return (
    <div>
      <h1>Manish React Test App</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input 
          type="text"
          placeholder="Search here"
          value={query}
          onChange={(e) => searchStory(e.target.value)} 
          />
        </div>
      </form>
    </div>
  )
}

export default Search