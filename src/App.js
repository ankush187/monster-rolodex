import './App.css';
import { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: ""
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (users => this.setState({
      monsters: users
    }))
  }

  render () {
    const {monsters, searchString} = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchString))

    return (
      <div className="App">
        {
          filteredMonsters &&
          <>
            <input type="search" placeholder="search monster" onChange={e => this.setState({searchString: e.target.value})} />
            <CardList monsters={filteredMonsters} />
          </>
        }
      </div>
    )
  }
}

export default App;
