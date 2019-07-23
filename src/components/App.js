import React from 'react';
import SearchBar from './SearchBar';
import Todolist from './Todolist';

const App = () => {
  return (
    <div>
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar />
      </div>
        <div className="ui container" style={{marginTop: '10px'}}>
        <Todolist />
      </div>
    </div>
  )
}

export default App;
