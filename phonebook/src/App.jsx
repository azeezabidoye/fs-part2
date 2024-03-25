import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState({ name: "Arto Hellas" });
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const nameObj = {
      name: newName,
    };
    setPersons(persons.concat(nameObj));
    console.log(persons);
    setNewName("");
  };

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* <ul>
        {persons.map((person) => {
          <li key={person.name}>{person.name}</li>;
        })}
      </ul> */}
      {/* <p>{persons[0].name}</p> */}
    </div>
  );
};

export default App;
