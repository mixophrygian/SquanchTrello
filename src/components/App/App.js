import React, { Component } from 'react';

/* Material UI for Add button*/
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

/* Material UI for add-task modal */
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import './App.css';
import './../../styles/reset.css'
import TodoList from '../TodoList/TodoList';
import actions from '../../TodoActions';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
      name: '',
      description: ''
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleAdd = () => {
    this.setState({open: false});
    actions.addTodo(this.state);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      name: '',
      description: ''
    })
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const state = this.state;
    state[name] = e.target.value;
    this.setState(state);
  };

  render() {

    const actions = [
      <FlatButton
        label="Add Task"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleAdd}
      />,
    ];

    return (
      <div className="App">
        <div className="App__addTask">
          <div className="App__addTask--content">
            <h1>ADD TASK</h1>
            <div className="App__addTask--content button">
              <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <FloatingActionButton mini={true} onClick={this.handleOpen}>
                  <ContentAdd />
                </FloatingActionButton>
              </MuiThemeProvider>
            </div>
          </div>
        </div>

        <TodoList className="TodoList" todos={this.props.todos}></TodoList>

        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Dialog
            title="Add a new Todo"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
          <TextField
            name="name"
            floatingLabelText="Task Name"
            hintText="Task Name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
          <br />
          <TextField
            name="description"
            floatingLabelText="Task Description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
