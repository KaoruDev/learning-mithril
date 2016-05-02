var ViewModel = function () {
  this.users = m.prop([]);
};

ViewModel.prototype.search = function (e) {
  // fire request to server for this.query();
  m.request({
    method: "GET",
    url: "/users.json",
    data: {
      query: e.currentTarget.value,
    },
  }).then(this.users);
};

window.Search.ViewModel = ViewModel;
