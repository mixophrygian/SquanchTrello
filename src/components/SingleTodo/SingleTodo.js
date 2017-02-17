import React, { Component } from 'react';

import './SingleTodo.css';
import './../../styles/reset.css';
import actions from '../../TodoActions';

class SingleTodo extends Component {

  constructor(props){
    super(props);
    this.advanceTodo = this.advanceTodo.bind(this);
  }

  advanceTodo(e){
    e.preventDefault();
    actions.updateTodo(this.props.data)
  }

    render() {

      return (
        <div className="SingleTodo">
          <div className="textContainer">
            <span className="textContainer--name">{this.props.data.taskName}</span>
            <span className="textContainer--description">{this.props.data.taskDescription}</span>
          </div>
          <div className="buttonContainer">
            <button onClick={this.advanceTodo}>Start</button>
          </div>
        </div>
      );
    }
  }

  export default SingleTodo;
