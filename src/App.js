import { useEffect, useState } from 'react'
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setMonsters(data))
  }, [])

  useEffect(() => {
    const newMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })
    setFilteredMonsters(newMonsters)
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        classname="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
