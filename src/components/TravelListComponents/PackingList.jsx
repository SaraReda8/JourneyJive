import React, { useState } from 'react';
import Item from './Item';
import styles from './TravelListComponents.module.css'
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('input');

  const sortedItems =
    sortBy === 'description'
      ? [...items].sort((a, b) => a.description.localeCompare(b.description))
      : sortBy === 'packed'
      ? [...items].sort((a, b) => Number(a.packed) - Number(b.packed))
      : items;

  return (
    <div className={styles.packing}>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList} className={styles.clear}>Clear list</button>
      </div>
    </div>
  );
}
