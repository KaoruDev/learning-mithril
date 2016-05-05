window.Todo.app = window.Redux.combineReducers({
  todos: window.Todo.reducers.todos,
  visibility: window.Todo.reducers.visibility,
});
