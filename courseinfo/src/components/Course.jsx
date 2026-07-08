const Header = (props) => <h1>{props.course}</h1>

const Content = ({ parts }) => (
  <div>
    {parts.map(part => 
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    )}
  </div>
)

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)

const Total = ({ total }) => <p>Number of exercises {total}</p>

const Course = ({ course, total }) => {
  const initialValue = 0
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

export default Course