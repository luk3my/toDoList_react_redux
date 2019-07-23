import React from 'react';
import {connect} from 'react-redux';
import {completeToDo} from '../actions';
import {removeToDo} from '../actions';

class Todolist extends React.Component {
  renderList() {
  return this.props.list.map((item) => {
  return (
    <div className="item" key={item.id}>
        <h3 style={{textDecoration: item.completed ? "line-through" : "none"}}>{item.text}</h3>
    <div style={{float: 'right'}}>
      <button className="ui primary button" onClick={() => this.props.completeToDo(item.id)}>
        Complete
      </button>
      <button className="ui secondary button" onClick={() => this.props.removeToDo(item.id)}>
        Remove
      </button>
    </div>
    </div>
  )
});
 }

 render() {
   return <div className="ui divided list">{this.renderList()}</div>
 }

};

const mapStateToProps = (state) => {
  console.log(state);
  return {list: state.list,
          complete: state.complete,
          remove: state.remove};
}

export default connect(mapStateToProps, {completeToDo, removeToDo})(Todolist);
