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
            <h3>{this.props.data.taskName}</h3>
            <h5>{this.props.data.taskDescription}</h5>
          </div>
          <div className="buttonContainer">
            <button onClick={this.advanceTodo}>Start</button>
          </div>
        </div>
      );
    }
  }

  export default SingleTodo;
