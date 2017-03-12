const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: action.id,
        title: action.title,
        completed: false,
        text: action.text,
        date: new Date()
      }]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...action,
          completed: !action.completed
        }
      });
    default:
      return [];
  }
}

export default todo;