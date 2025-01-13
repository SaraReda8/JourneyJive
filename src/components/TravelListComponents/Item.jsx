import styles from "./TravelListComponents.module.css";

export default function TravelListItem({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span
        style={item.packed ? { textDecoration: "line-through" } : undefined}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)} className={styles.x}>❌</button>
    </li>
  );
}
