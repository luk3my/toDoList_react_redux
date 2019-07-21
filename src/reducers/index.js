import {combineReducers} from 'redux';

export const listReducer = (listArray = [], action) => {

let i = 0;
  listArray = {arr:  []};
if (action.type === 'ADD_TODO') {
    return {arr: [...listArray.arr, {title: action.payload, key: i++}]};
  } else {
    return listArray;
  }
};

export const completeReducer = (state, action) => {
  console.log(state)

if (action.type === 'COMPLETE_TODO') {
    return {title: state};
  } else {
    return {title: 'jj'};
  }
};


export default combineReducers({
  list: listReducer,
  completeReducer: completeReducer
});
