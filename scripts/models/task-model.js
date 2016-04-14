var m = require('mithril');

module.exports = function (data) {
  this.description = m.prop(data.description);
  this.done = m.prop(false);
};
