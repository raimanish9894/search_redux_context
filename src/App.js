import React from 'react';
import Story from './components/Story';
import Search from './components/Search';
import Pagination from './components/Pagination';
// import { AppContext } from "./components/ContextApi";
// import { useGlobalContext } from "./components/ContextApi";

function App() {

  return (
    <div>
      <Search />
      <Pagination />
      <Story />
    </div>
  );
}

export default App;
