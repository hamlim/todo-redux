let nextTodoId = 0
export const addTodo = (text, note, timeDue) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    note,
    timeAdded: new Date(),
    timeDue
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}