import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("ade");

  const addPerson = (event) => {
    event.preventDefault();
    const nameObj = {
      name: newName,
      number: newNumber,
    };
    // setPersons(persons.concat(nameObj));

    persons.map((person) => {
      if (person.name === nameObj.name) {
        alert(`${nameObj.name} is already added to phonebook`);
      }
    });
    setPersons(persons.concat(nameObj));
    console.log(persons);
    setNewName("");
    setNewNumber("");
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

  // Function to search for names in the saerch bar
  const filteredNames = persons.filter((person) => {
    // person.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (person.name.toLowerCase() === searchQuery.toLowerCase()) {
      return person.name;
    }
  });

  console.log(filteredNames);
  // const filterNames = (namesArr) => {
  //   return namesArr.name.toLowerCase().includes(searchQuery.toLowerCase());
  // };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Find name: <input value={searchQuery} onChange={handleSearchName} />
        </div>
      </form>

      <ul>
        {filteredNames.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>

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
          <li key={person.id}>
            {person.name}: {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
