import React from 'react';
import {connect} from 'react-redux';
import {setToDo} from '../actions';

class SearchBar extends React.Component {

  getSearchBarVal = () => {
    const searchVal = document.getElementById("search").value;
    document.getElementById("search").value = '';
    return searchVal
  };

render () {
  return (
    <div>
      <div className="ui input focus">
        <input id="search" type="text" placeholder="Add thing that needs doing" />
      </div>
      <button onClick={() => this.props.setToDo(this.getSearchBarVal())} className="ui primary button">
        Add
      </button>
    </div>
    )
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {listItems: state.listItems};
}

export default connect(mapStateToProps, {setToDo})(SearchBar);
