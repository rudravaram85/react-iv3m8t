iimport React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import User from './user';
class UserList extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',users
    };
  }

componentDidMount() {
axios.get(`https://jsonplaceholder.typicode.com/users`)
.then(res => {
const users = res.data;
console.log(name.name);
this.setState({ users:users });
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

render(<App />, document.getElementById('root'));
