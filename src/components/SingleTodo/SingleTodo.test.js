import React from 'react';
import ReactDOM from 'react-dom';
import SingleTodo from './SingleTodo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleTodo />, div);
});
