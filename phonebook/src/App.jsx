import { useState, useEffect } from "react";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNames, setFilteredName] = useState([]);
  const [alertMsg, setAlertMsg] = useState(null);

  const hook = () => {
    personService.getAll().then((initialPerson) => setPersons(initialPerson));
  };

  useEffect(hook, []);

  const addPerson = (event) => {
    event.preventDefault();
    const nameObj = {
      name: newName,
      number: newNumber,
    };

    persons.map((person) => {
      if (person.name === nameObj.name) {
        alert(`${nameObj.name} is already added to phonebook`);
      }
    });
    personService.create(nameObj).then((returnedPerson) => {
      console.log(returnedPerson);
      setPersons(persons.concat(nameObj));
      setAlertMsg(`${returnedPerson.name} added successfully 🎉`);
      setNewName("");
      setNewNumber("");
      setTimeout(() => {
        setAlertMsg(null);
      }, 5000);
    });
  };

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchName = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = persons.filter((person) => {
      return person.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredName(filtered);
    setSearchQuery("");
  };

  const handleDeletePerson = (id) => {
    personService.deletePerson(id).then((deletedPerson) => {
      alert(`Delete ${deletedPerson.name} from the phonebook?  `);
      console.log(deletedPerson);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={alertMsg} />
      <form onSubmit={handleSearch}>
        <div>
          Find name: <input value={searchQuery} onChange={handleSearchName} />
        </div>
      </form>
      {filteredNames.map((eachName, index) => {
        return (
          <p key={index}>
            {eachName.name}: {eachName.number}
          </p>
        );
      })}
      <br /> <hr />
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name}: {person.number}
            <button onClick={() => handleDeletePerson(person.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
