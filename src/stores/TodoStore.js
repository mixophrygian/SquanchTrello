var dispatcher = require('../dispatcher');
var todoService = require('../services/todoService');

function EntryStore() {
  var listeners = [];

  function onChange(listener) {
    getTodos(listener);
    listeners.push(listener);
    //how views register with the store, add the tasks to our listeners
  }

  function getTodos(cb) {
    todoService.getTodos().then(function(res){
      cb(res);
    });
  }

  function addTodo(singleTodo) {
    todoService.addTodo(singleTodo).then(function(res){
      console.log(res);
      triggerListeners();
    })
  }

  function updateTodo(singleTodo) {
    todoService.updateTodo(singleTodo).then(function(res){
      console.log(res);
      triggerListeners();
    })
  }

  function triggerListeners() {
    getTodos(function(res){
      listeners.forEach(function(listener) {
        listener(res);
      });
    });
  }

//point at which the store registers itself with the dispatcher
//so that on these events, the store automatically does this
  dispatcher.register(function(payload){
    var split = payload.type.split(":");
    if(split[0] === "todo") {
      switch(split[1]) {
        case "addTodo":
          addTodo(payload.singleTodo);
          break;
        case "updateTodo":
          updateTodo(payload.singleTodo);
          break;
        default:
          break;
      }
    }
  });

  return {
    onChange: onChange
  }
}

module.exports = EntryStore();
