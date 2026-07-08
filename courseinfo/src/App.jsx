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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Mystery Part',
        exercises: 6,
        id: 4,
      }
    ],
  }

  const total = course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)

  return <Course course={course} total={total} />
}

export default App