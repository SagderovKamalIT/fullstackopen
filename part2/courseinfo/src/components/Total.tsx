const Total = ({parts}) => {

  return (
    <p>
      {`total of 
      ${parts.reduce((sum, item) => sum + item.exercises, 0)}
      exercises`}
    </p>
  )
}

export default Total;