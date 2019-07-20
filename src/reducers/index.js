import {combineReducers} from 'redux';

// export const AddReducer = (list = null, action) => {
//   console.log(action);
//   return list
// }

export const listReducer = (listArray = [], action) => {

let i = 0;

  listArray =  [
    {title: 'Do things', key: i++},
    {title: 'stuff', key: i++},
    {title: 'sleep', key: i++},
    {title: 'eat', key: i++},
  ];
if (action.type === 'ADD_TODO') {
    return {arr: [...listArray, {title: action.payload}]};
  } else {
    return listArray;
  }
};

export default combineReducers({
  // AddReducer: AddReducer
  list: listReducer
});
