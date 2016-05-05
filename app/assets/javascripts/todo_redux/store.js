window.store = window.Redux.createStore(window.Todo.app);
var store = window.store;
var Todo = window.Todo;

store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch(Todo.actions.add('learn redux'));
store.dispatch(Todo.actions.add('implement it with mithril'));
