import React, { useState } from "react";

const MultiSelectionComponent = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", isSelected: false },
    { id: 2, name: "Item 2", isSelected: false },
    { id: 3, name: "Item 3", isSelected: false },
    { id: 4, name: "Item 4", isSelected: false },
    { id: 5, name: "Item 5", isSelected: false },
  ]);

  const selectedCount = items.filter((item) => item.isSelected).length;

  const handleItemClick = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const handleSelectAll = () => {
    setItems(items.map((item) => ({ ...item, isSelected: true })));
  };

  const handleUnselectAll = () => {
    setItems(items.map((item) => ({ ...item, isSelected: false })));
  }

  return (
    <div>
      <button onClick={handleSelectAll}>Select All</button>
      <button onClick={handleUnselectAll}>Unselect All</button>
      <p>{selectedCount} Item(s) selecionados</p>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{ backgroundColor: item.isSelected ? "red" : "" }}
            onClick={() => handleItemClick(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelectionComponent;
