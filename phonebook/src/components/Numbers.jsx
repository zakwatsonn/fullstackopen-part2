const Profile = (props) => {
  return (
      <p>{props.name}: {props.number}</p>
  )
}

const Numbers = ({ personsToShow }) => {
    return (
        <div>
            {personsToShow.map(person => <Profile key={person.id} name={person.name} number={person.number}/>)}
        </div>
    )
}

export default Numbers