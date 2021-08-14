import './App.css';
import { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from "./component/search-box/search-box.component"; 

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (users => this.setState({
      monsters: users
    }))
  }

  handleChange(event) {
    this.setState({searchString: event.target.value})
  }

  handleChange2 = (event) => {
    this.setState({searchString: event.target.value})

  }
 
  render () {
    const {monsters, searchString} = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchString))
    return (
      <div className="App">
        <h1 class="header">Monster Roledex</h1>
        {
          filteredMonsters &&
          <>
            <SearchBox placeholder={"search monster"} handleChange={this.handleChange2}/>
            <CardList monsters={filteredMonsters} />
          </>
        }
      </div>
    )
  }
}

export default App;
