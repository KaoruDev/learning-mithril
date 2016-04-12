var m = window.m;

var todo = {
  Task: function (data) {
    this.description = m.prop(data.description);
    this.done = m.prop(false);
  },

  TaskList: Array,

  vm: {
    init: function () {
      todo.vm.list = new todo.TaskList();
      todo.vm.description = m.prop('');
      todo.vm.add = function () {
        if (todo.vm.description()) {
          todo.vm.list.push(new todo.Task({ description: todo.vm.description() }));
          todo.vm.description('');
        }
      };
    },
  },

  view: function () {
    return m('div', [
        m('input', {
          onchange: m.withAttr('value', todo.vm.description),
          value: todo.vm.description(),
        }),
        m('button', { onclick: todo.vm.add }, 'Add'),
        m('table', [
          todo.vm.list.map(function (task) {
            return m('tr', [
                m('td', [
                  m('input[type=checkbox]', { onclick: m.withAttr('checked', task.done), checked: task.done() }),
                ]),
                m('td', { style: { textDecoration: task.done() ? 'line-through' : 'none' } }, task.description()),
            ]);
          }),
        ]),
      ]);
  },

  controller: function () {
    todo.vm.init();
  },
};

m.mount(document.getElementsByTagName('body')[0], {
  controller: todo.controller,
  view: todo.view,
});

