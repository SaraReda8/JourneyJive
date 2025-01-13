import { React, useState } from 'react';
import styles from './TravelList.module.css';
import TravelListLogo from '../../components/TravelListComponents/Logo';
import Form from './../../components/TravelListComponents/Form';
import PackingList from './../../components/TravelListComponents/PackingList';
import Stats from './../../components/TravelListComponents/Stats';

export default function TravelList(){
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
      setItems((items) => [...items, item]);
    }
  
    function handleDeleteItem(id) {
      setItems((items) => items.filter((item) => item.id !== id));
    }
  
    function handleToggleItem(id) {
      setItems((items) =>
        items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        )
      );
    }
  
    function handleClearList() {
      const confirmed = window.confirm(
        "Are you sure you want to delete all items?"
      );
  
      if (confirmed) setItems([]);
    }
  


    return <>
  <div className={styles.TravelList}>
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


    </>
}