(function () {
  window.Todo.reducers.visibility = function (state, action) {
    if (typeof state === 'undefined') {
      return window.Todo.uiStates.visibility.all;
    }

    return action.payload.visibility || state;
  };
})();
