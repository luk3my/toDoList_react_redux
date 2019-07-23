let i = 0

export const setToDo = (value) => {
  console.log(value)
    return {
        type: "ADD_TODO",
        text: value,
        completed: false,
        id: i++
      }
}

export const completeToDo = (id) => {
    return {
        type: "COMPLETE_TODO",
        id: id
      }
}

export const removeToDo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id: id
  }
}
