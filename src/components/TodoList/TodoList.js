import React, { Component } from 'react';

import SingleTodo from '../SingleTodo/SingleTodo'
import './TodoList.css';
import './../../styles/reset.css'

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      todo: [],
      inProgress: [],
      complete: []
    };
  }

  componentWillReceiveProps(nextProps){
    let todo = [];
    let inProgress = [];
    let complete = [];
    let archive = [];

    todo = nextProps.todos.filter(function(todo){
        return todo.state === "todo"
    });

    inProgress = nextProps.todos.filter(function(todo){
        return todo.state === "in-progress"
    });

    complete = nextProps.todos.filter(function(todo){
        return todo.state === "complete"
    });

    archive = nextProps.todos.filter(function(todo){
        return todo.state === "archive"
    });

    this.setState({
      todo: todo,
      inProgress: inProgress,
      complete: complete,
      archive: archive
    });
  }

    render() {

      return (
        <div className="TodoList">
          <div className="TodoList__Column">
            <h1>TODO</h1>
            <div className="TodoList__Column--ToDo">
              <div id="todoContainer">
              {
                this.state.todo.map(function(item, index){
                  return(
                    <SingleTodo data={item} key={"todo-" + index}></SingleTodo>
                  )
                })
              }
              </div>
            </div>
          </div>

          <div className="TodoList__Column">
            <h1>IN PROGRESS</h1>
            <div className="TodoList__Column--InProgress">
              <div id="inProgressContainer">
              {
                this.state.inProgress.map(function(item, index){
                  return(
                    <SingleTodo data={item} key={"todo-" + index}></SingleTodo>
                  )
                })
              }
              </div>
            </div>
          </div>

          <div className="TodoList__Column">
            <h1>DONE</h1>
            <div className="TodoList__Column--Complete">
              <div id="completeContainer">
              {
                this.state.complete.map(function(item, index){
                  return(
                    <SingleTodo data={item} key={"todo-" + index}></SingleTodo>
                  )
                })
              }
              </div>
            </div>
          </div>

        </div>
      );
    }
  }

  export default TodoList;
