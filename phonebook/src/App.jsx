import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Numbers from './components/Numbers'

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
  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(nameFilter.toLowerCase())
  )

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const newNameFilter = event.target.value
    setNameFilter(newNameFilter)
  }

  const nameAlreadyAdded = (addition) => addition.name === newName
  const numberAlreadyAdded = (addition) => addition.number === newNumber

  const addNote = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }

    if (persons.some(nameAlreadyAdded)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    
    if (persons.some(numberAlreadyAdded)) {
      alert(`${newNumber} is already added to the phonebook`)
      return
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter by name 
      <Filter value={nameFilter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <Form nameValue={newName} numberValue={newNumber} onNameChange={handleNameChange} onNumberChange={handleNumberChange} addNote={addNote} />
      <h2>Numbers</h2>
      <Numbers personsToShow={personsToShow}/>
    </div>
  )
}

export default App