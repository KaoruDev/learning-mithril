window.Search.component = {

  controller: function () {
    return new Search.ViewModel();
  },

  view: function (vm) {
    return m('div', [
        m('input', { type: 'text', onkeyup: vm.search.bind(vm) }),
        m('div', { class: 'result' }, [
          vm.users().map(function (user) {
            return m('p', user.username);
          }),
        ]),
    ]);
  },

};
