import Course from "./components/Course"

const App = () => {
  const courses = [
    {
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const total = courses.map(course => 
    course.parts.reduce((sum, current) => 
      sum + current.exercises,
      0
    )
  )
  console.log(total)

  return (courses.map((course) => <Course key={course.id} course={course} total={total[course.id-1]}/>))
}

export default App