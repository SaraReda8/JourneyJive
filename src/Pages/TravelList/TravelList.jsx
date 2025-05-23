import { useState } from 'react';
import styles from './TravelList.module.css';
import TravelListLogo from '../../components/TravelListComponents/Logo';
import Form from '../../components/TravelListComponents/Form';
import PackingList from '../../components/TravelListComponents/PackingList';
import Stats from '../../components/TravelListComponents/Stats';

export default function TravelList() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if (confirmed) setItems([]);
  };

  return (
    <div className={styles.travelList}>
      <TravelListLogo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}