(function () {
  var _ = window._;

  window.Todo.reducers.todos = function (state, action) {
    if (typeof state === 'undefined') {
      state = [];
    }

    switch (action.type) {
      case window.Todo.actionsMap.add:
        return add(state, action);
      case window.Todo.actionsMap.remove:
        return remove(state, action);
      case window.Todo.actionsMap.complete:
        return complete(state, action);
      default:
        return state;
    }
  };

  function add(state, action) {
    var dup = state.slice();
    dup.push({
      name: action.payload.name,
      completed: false,
    });

    return dup;
  }

  function remove(state, action) {
    return _.reject(state, function (todo, idx) {
      return idx === action.payload.idx;
    });
  }

  function complete(state, action) {
    return _.map(state, function (todo, idx) {
      console.log('idx:', idx, 'action.payload:', action.payload);
      if (idx === action.payload.idx) {
        console.log('switching to completed');
        return _.extend({}, todo, {
          completed: true,
        });
      }

      return todo;
    });
  }
})();
