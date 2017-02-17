import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import TodoStore from './stores/TodoStore'
import './styles/index.css';

/*Material UI requirement */
import injectTapEventPlugin from 'react-tap-event-plugin';

var _todos = [];

var getTodosCB = function(todos){
  _todos = todos;
  render();
}

TodoStore.onChange(getTodosCB);

injectTapEventPlugin();

function render(){
  ReactDOM.render(
    <App todos={_todos}/>,
    document.getElementById('root')
  );
}
render();
