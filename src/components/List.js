import React from 'react';
import Item from './Item';

const List = ({ animals, onIncreasePoints }) => {
  return (
    <div>
      {animals.map(animal => (
        <Item
          key={animal.id}
          animal={animal}
          onIncreasePoints={() => onIncreasePoints(animal.id)}
        />
      ))}
    </div>
  );
};

export default List;
