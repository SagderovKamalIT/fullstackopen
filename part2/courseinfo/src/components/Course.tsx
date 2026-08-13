import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course}) => {
  return (
    <div>

      <Header courses={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>

  )
}

export default Course;