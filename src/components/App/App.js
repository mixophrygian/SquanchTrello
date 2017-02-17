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

class App extends Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {

    const actions = [
      <FlatButton
        label="Add Task"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    var todos = this.props.todos;
    console.log(todos);

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
        <div className="TodoList" >
          <div>TODO</div>
          <div>IN PROGRESS</div>
          <div>DONE</div>
        </div>

        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Dialog
            title="Add a new Todo"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
          <TextField
            floatingLabelText="Task Name"
            hintText="Task Name"
            required
          />
          <br />
          <TextField
            floatingLabelText="Task Description"
          />
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;