import React, { Component } from 'react';

import './TodoList.css';
import './../../styles/reset.css'

class TodoList extends Component {

  render() {

    var todos = this.props.todos;
    console.log(todos);

    return (
      <div className="TodoList">
        <div className="TodoList__Column">
          <h1>TODO</h1>
          <div className="TodoList__Column--ToDo">
          <p>some stuff</p>
          </div>
        </div>
        <div className="TodoList__Column">
          <h1>IN PROGRESS</h1>
          <div className="TodoList__Column--InProgress">
            <p>some stuff</p>
          </div>
        </div>
        <div className="TodoList__Column">
          <h1>DONE</h1>
          <div className="TodoList__Column--Done">
            <p>some stuff</p>
          </div>
        </div>

      </div>
    );
  }
}

export default TodoList;
