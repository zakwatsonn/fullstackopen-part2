import { useState } from 'react'

const Profile = (props) => {
  return (
      <p>{props.name}: {props.number}</p>
  )
}

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const newNameFilter = event.target.value
    setNameFilter(newNameFilter)
    setFilteredPersons(persons.filter((person) => person.name.toLowerCase().includes(newNameFilter.toLowerCase())))
  }

  const nameAlreadyAdded = (addition) => addition.name === newName
  const numberAlreadyAdded = (addition) => addition.number === newNumber

  const addNote = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (persons.some(nameAlreadyAdded)) {
      alert(`${newName} is already added to the phonebook`)
    } if (persons.some(numberAlreadyAdded)) {
      alert(`${newNumber} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
    }

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter by name 
      <input 
        value={nameFilter}
        onChange={handleFilterChange}
      />
      <h2>add a new</h2>
      <form>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
          number:
          <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit" onClick={addNote}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person => <Profile key={person.id} name={person.name} number={person.number}/>)}
    </div>
  )
}

export default App