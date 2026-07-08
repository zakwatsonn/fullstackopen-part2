import { useState } from 'react'

const Profile = (props) => {
  return (
      <p>{props.name}: {props.number}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '07476 314214'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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
      {persons.map(person => <Profile key={person.name} name={person.name} number={person.number}/>)}
    </div>
  )
}

export default App