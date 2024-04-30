import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import List from './components/List';

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/animals")
    .then(response => response.json())
    .then(data => setAnimals(data))
    .catch(error => console.error('Error fetching data:', error));
}, []);

const increasePoints = (id) => {
  setAnimals(animals.map(animal => {
    if (animal.id === id) {
      return { ...animal, points: animal.points + 1 };
    }
    return animal;
  }));
};
  return (
    <div>
      <h1>Animal Points Tracker</h1>
      <List animals={animals} onIncreasePoints={increasePoints} />

   </div>
  );
}

export default App;
