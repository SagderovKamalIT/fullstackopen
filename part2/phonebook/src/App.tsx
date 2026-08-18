import { useState } from "react";
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

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

      <Filter value={filterName} onChange={handleToChange}/>

    

      <h2>Add a new</h2>

      <PersonForm 
        onSubmit={addNewPerson}
        nameValue={newName}
        onNameChange={handleChangeName}
        numberValue={newPhone}
        onNumberChange={handleChangeNumber}
      />
      
    
      <h2>Numbers</h2>

      <Persons personNameToShow={personNameToShow} />

 
    </div>
  );
};

export default App;
