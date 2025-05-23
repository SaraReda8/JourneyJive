import styles from "./TravelListComponents.module.css";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
        aria-label={`Toggle ${item.description}`}
      />
      <span className={item.packed ? styles.itemChecked : ''}>
        {item.quantity} {item.description}
      </span>
      <button 
        onClick={() => onDeleteItem(item.id)} 
        className={styles.deleteBtn}
        aria-label={`Delete ${item.description}`}
      >
        ❌
      </button>
    </li>
  );
}