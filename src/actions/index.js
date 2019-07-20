export const setToDo = (value) => {
  console.log(value)
    return {
        type: "ADD_TODO",
        payload: value

      }
}

export const completeToDo = (value) => {
  console.log(value)
    return {
        type: "COMPLETE_TODO",
        payload: value

      }
}
