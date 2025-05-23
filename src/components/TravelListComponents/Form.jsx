import { useState } from "react";
import styles from './TravelListComponents.module.css';

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    const newItem = { 
      description: description.trim(), 
      quantity, 
      packed: false, 
      id: Date.now() 
    };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className={styles.addForm} onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select 
        value={quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))}
        aria-label="Select item quantity"
      >
        {Array.from({ length: 30 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        aria-label="Item description"
        required
      />
      <button type="submit" aria-label="Add item">Add</button>
    </form>
  );
}