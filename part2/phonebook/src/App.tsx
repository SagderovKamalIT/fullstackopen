import { useState } from "react";

const App = () => {
  // телефоная книга
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const addNewPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      phone: newPhone,
      id: String(persons.length + 1),
    };

    const hasName = persons.some((person) => person.name === newName);

    if (hasName === true) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewPhone("")
    }

    
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewPhone(event.target.value)
    
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>

        {/* отображения номера телефона */}
        <div >
          number: <input 
          value={newPhone}
          onChange={handleChangeNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <ul>
        {persons.map((person) => (
          <li key={person.id}> {person.name} {person.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
