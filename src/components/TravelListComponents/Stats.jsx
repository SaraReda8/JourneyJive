import styles from "./TravelListComponents.module.css";

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className={styles.Stats}>
        <em>Start adding items to your packing list! 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className={styles.Stats}>
      <em>
        {percentage === 100
          ? "You got everything! Ready to go! ✈️"
          : `💼 You have ${numItems} items, and ${numPacked} packed (${percentage}%)`}
      </em>
    </footer>
  );
}
