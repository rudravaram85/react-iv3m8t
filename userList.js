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
    {this.state.people.map((person, index) => (
        <p>Hello, {person.name} from {person.country}!</p>
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
