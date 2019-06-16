import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import axios from 'axios';
import UserList from './userList';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  


  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        
        <UserList/> 
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
