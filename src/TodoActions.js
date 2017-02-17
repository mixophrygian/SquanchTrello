var dispatcher = require('../dispatcher');

module.exports = {
  addTodo: function(singleTodo){
    dispatcher.dispatch({
      singleTodo: singleTodo,
      type: "todo:addTodo"
    });
  },

  updateTodo: function(singleTodo){
    dispatcher.dispatch({
      singleTodo: singleTodo,
      type: "todo:updateTodo"
    });
  }
}
