import { useState } from "react";

const App = () => {
  // телефоная книга
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // 1. Пользователь печатает значение в полее ввода
  // 2. Пользователь нажимает на кнопку (add) - срабатывает обработчик события
  // 3. Обоаботчик события добавляет имя из поля ввода в массив значений/имен
  // 4. Значение переноситься с обоаботчика в массив и сохраняется

  // 5. Срабатывает обоаботчик события, отвечающий за отрисовку массива
  // 6. происходит отрисовка и пользователь видет на экране новое имя

  const addNewName = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      id: String(persons.length + 1),
    };
    setPersons(persons.concat(newPerson));
    setNewName("");
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <ul>
        {persons.map((person) => (
          <li key={person.id}> {person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
