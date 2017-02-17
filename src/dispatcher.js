var Guid = require('guid');

var listeners = {};

function dispatch(payload){
  for (var id in listeners){
    if(listeners.hasOwnProperty(id)){
      listeners[id](payload);
    }
  }
}

function register(cb) {
  var id = Guid.create();
  listeners[id] = cb;
}

module.exports = {
  register: register,
  dispatch: dispatch
}
