import {combineReducers} from 'redux';

const INITIAL_DATA = []

const listReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case 'ADD_TODO':
        return [
            ...state,{
                id: action.id,
                text: action.text,
                completed: false,
            }
        ]
        case 'COMPLETE_TODO':
        return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
         )
         case 'REMOVE_TODO':
         const numIndex = parseInt(action.id)
         return state.filter(todo => todo.id !== numIndex);
        default:
        return state
    }
}

export default combineReducers({
  list: listReducer,
  // completeReducer: completeReducer
});
