import { Component } from "react";
import "./App.css";

class App extends Component {
  //1
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:'',
    };
  }

  //3
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            //5
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange=(event) => {
    const searchField=event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField };
    })
  }

  //2 - 4
  render() {
    const {monsters, searchField}=this.state
    const {onSearchChange}=this

    const filteredMonsters = monsters.filter((item) => {
      return item.name.toLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />

        {filteredMonsters.map((monster, index) => {
          return <h1 key={index}>{monster.name}</h1>
        })}
      </div>
    );
  }
}

export default App;
