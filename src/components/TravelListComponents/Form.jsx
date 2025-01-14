import { useState } from "react";
import styles from './TravelListComponents.module.css'
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className={styles.addForm} onSubmit={handleSubmit}>
    <h3>What do you need for your trip?</h3>
    <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
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
      name='text'
      onChange={(e) => setDescription(e.target.value)}
    />
    <button>Add</button>
  </form>
  );
}
