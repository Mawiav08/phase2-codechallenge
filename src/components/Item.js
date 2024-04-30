import React from 'react';
import './Item.css'

function Item({ animal, onIncreasePoints }) {
  const { name, age, image, points } = animal;

  return (
    <div className="animal-item">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Points: {points}</p>
      <button onClick={() => onIncreasePoints(animal.id)}>Increase Points</button>
    </div>
  );
}

export default Item;
