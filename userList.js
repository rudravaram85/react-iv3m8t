import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import User from './user';
import axios from 'axios';
class UserList extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',users:[]
    };
  }

componentDidMount() {
axios.get(`https://jsonplaceholder.typicode.com/users`)
.then(res => {
const usersdata = res.data;
//console.log(name.name);
this.setState({ users:userdata });
}) 

}
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
       return (<div>
    {this.state.users.map((user, index) => (
        <p>Hello, {user.name} from {user.id}!</p>
    ))}
    </div>);
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

export default UserList;
