const Persons = ({personNameToShow}) => {
  return (
    <ul>
        {personNameToShow.map((person) => (
          <li key={person.id}>
            {" "}
            {person.name} {person.number}
          </li>
        ))}
      </ul>
  )
}

export default Persons;