import $ from 'jquery'
import promise from 'es6-promise';
const resourceUrl = "https://private-caaa7-versustracker.apiary-mock.com/tasks";

module.exports = {
  todos: [],
  availableID: 8,
  seeded: false,

  addTodo: function(entry){
    const Promise = promise.Promise;
    return new Promise((resolve, reject) =>{
      const newTodo = {
        id: this.availableID,
        state: 'todo',
        taskName: entry.name,
        taskDescription: entry.description,
      };
      this.todos.push(newTodo);
      this.availableID++;
      resolve();
    });
  },

  updateTodo: function(todo){
    const Promise = promise.Promise;
    return new Promise((resolve, reject) =>{
      const toMod = $.grep(this.todos, function(o){ return o.id === todo.id})[0];
      const newState = function(){
        switch(toMod.state){
        case 'todo':
          return 'in-progress';
        case 'in-progress':
          return 'complete';
        case 'complete':
          return 'archive';
        default:
          return 'todo';
        }
      }();
      toMod.state = newState;
      resolve();
    });
  },

  getSeedTodos: function(){
    const Promise = promise.Promise;
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
    const that = this;
    const Promise = promise.Promise;
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
