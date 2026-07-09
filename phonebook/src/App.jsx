import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Numbers from './components/Numbers'
import axios from 'axios'

const Profile = (props) => {
  return (
      <p>{props.name}: {props.number}</p>
  )
}


const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('server responds with', response)
        setPersons(response.data)
      })
  }, [])

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