(function () {
  const actionsMap = {
    add: 'ADD',
    complete: 'COMPLETE',
    remove: 'REMOVE',
    updateVisibility: 'updateVisibility',
  };

  window.Todo.actionsMap = actionsMap;

  const visibilityStates = {
    all: 'all',
    completed: 'completed',
    uncompleted: 'uncompleted',
  };

  window.Todo.uiStates = {
    visibility: visibilityStates,
  };

  window.Todo.actions = {
    add: function (name) {
      return {
        type: actionsMap.add,
        payload: {
          name: name,
        },
      };
    },

    remove: function (idx) {
      return {
        type: actionsMap.remove,
        payload: {
          idx: idx,
        },
      };
    },

    complete: function (idx) {
      return {
        type: actionsMap.complete,
        payload: {
          idx: idx,
        },
      };
    },

    changeVisibility: function (newState) {
      return {
        type: actionsMap.updateVisibility,
        payload: {
          visibilityState: visibilityStates[newState] || visibilityStates.all,
        },
      };
    },
  };
})();
