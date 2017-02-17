var $ = require('jquery');
var promise = require('es6-promise');
var resourceUrl = "https://private-caaa7-versustracker.apiary-mock.com/tasks";

module.exports = {

  todos: [],
  availableID: 8,
  seeded: false,

  addTodo: function(entry){
    var newTodo = {
      id: this.availableID,
      state: 'todo',
      taskName: entry.name,
      taskDescription: entry.description,
    };
    this.todos.push(newTodo);
    this.availableID++;
  },

  getSeedTodos: function(){
    var Promise = promise.Promise;
    return new Promise(function(resolve, reject){
      $.ajax({
        url: resourceUrl,
        method: "GET",
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  },

  getTodos: function() {
    var that = this;
    var Promise = promise.Promise;
    return new Promise(function(resolve, reject){
      if(!that.seeded){
        that.getSeedTodos().then(function(res) {
          that.todos = res.tasks;
          that.seeded = true;
          resolve(that.todos);
        })
      } else {
        return resolve(that.todos);
      }
    });
  }

}
