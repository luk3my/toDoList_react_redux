import React from 'react';
import SearchBar from './SearchBar';
import Todolist from './Todolist';

const App = () => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div className="ui list">
        <Todolist />
      </div>
    </div>
  )
}

export default App;
