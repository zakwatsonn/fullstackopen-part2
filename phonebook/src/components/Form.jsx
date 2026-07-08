const Input = ({ value, onChange }) => {
  return (
    <input value={value} onChange={onChange} />
  )
}

const Form = (props) => {
    return (
        <form>
            <div>
                name: 
                <Input value={props.nameValue} onChange={props.onNameChange}/>
                number:
                <Input value={props.numberValue} onChange={props.onNumberChange}/>
            </div>
            <div>
                <button type="submit" onClick={props.addNote}>add</button>
            </div>
      </form>
    )
}

export default Form