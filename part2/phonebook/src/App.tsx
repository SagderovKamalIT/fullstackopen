import { useState } from "react";

const App = () => {
  // телефоная книга
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterName, setFilterName] = useState("");

  const addNewPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newPhone,
      id: String(persons.length + 1),
    };

    const hasName = persons.some((person) => person.name === newName);

    if (hasName === true) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewPhone("");
    }
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewPhone(event.target.value);
  };

  // наличие контатка в списке

  const personNameToShow = persons.filter((person) => {
    return person.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const handleToChange = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        <div>
          filter shown with a:{" "}
          <input value={filterName} onChange={handleToChange} />
        </div>
      </div>

      <h2>add a new</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>

        {/* отображения номера телефона */}
        <div>
          number: <input value={newPhone} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <ul>
        {personNameToShow.map((person) => (
          <li key={person.id}>
            {" "}
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
