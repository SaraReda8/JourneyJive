import React, { useState } from "react";
import styles from "./SearchSection.module.css";

const destinations = [
  "Egypt", "Italy", "France", "Japan", "Brazil",
  "India", "Mexico", "Australia", "Germany", "Canada",
  "Greece", "South Africa", "Thailand", "Turkey", "Argentina",
  "China", "Spain", "Russia", "United States", "Morocco",
];

const typologies = [
  "Relax", "Cultural", "Sporty", "History", "Adventure",
  "Luxury", "Nature",
];

const difficulties = ["Low", "Medium", "High"];

const SearchSection = () => {
  const [destination, setDestination] = useState("");
  const [typology, setTypology] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [rooms, setRooms] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching with:", {
      destination,
      typology,
      difficulty,
      rooms,
      checkIn,
      checkOut,
    });
  };

  return (
    <div className={styles.SearchSectionContainer}>
      <form className={styles.formContainer} onSubmit={handleSearch}>
        <h1 className={styles.title}>Search for Your Next Adventure</h1>
        <div className={styles.formGroupContainer}>
          {/* Destination Field */}
          <div className={styles.formGroup}>
            <label htmlFor="destination" className={styles.label}>
              Destination
            </label>
            <select
              id="destination"
              className={styles.inputField}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Select a destination</option>
              {destinations.map((dest, index) => (
                <option key={index} value={dest}>{dest}</option>
              ))}
            </select>
          </div>
          {/* Typology Field */}
          <div className={styles.formGroup}>
            <label htmlFor="typology" className={styles.label}>
              Typology
            </label>
            <select
              id="typology"
              className={styles.inputField}
              value={typology}
              onChange={(e) => setTypology(e.target.value)}
            >
              <option value="">Select a typology</option>
              {typologies.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          {/* Difficulty Field */}
          <div className={styles.formGroup}>
            <label htmlFor="difficulty" className={styles.label}>
              Difficulty
            </label>
            <select
              id="difficulty"
              className={styles.inputField}
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="">Select difficulty</option>
              {difficulties.map((diff, index) => (
                <option key={index} value={diff}>{diff}</option>
              ))}
            </select>
          </div>
        </div>
        {/* Number of Rooms Field */}
        <div className={styles.formGroup}>
          <label htmlFor="rooms" className={styles.label}>
            Number of Rooms
          </label>
          <input
            id="rooms"
            type="number"
            min="1"
            value={rooms}
            className={styles.inputField}
            onChange={(e) => setRooms(e.target.value)}
          />
        </div>
        {/* Check-In Field */}
        <div className={styles.formGroup}>
          <label htmlFor="checkIn" className={styles.label}>
            Check-In
          </label>
          <input
            id="checkIn"
            type="date"
            value={checkIn}
            className={styles.inputField}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        {/* Check-Out Field */}
        <div className={styles.formGroup}>
          <label htmlFor="checkOut" className={styles.label}>
            Check-Out
          </label>
          <input
            id="checkOut"
            type="date"
            value={checkOut}
            className={styles.inputField}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        {/* Submit Button */}
        <button type="submit" className='btn2 w-100'>
          Find Tours
        </button>
      </form>
    </div>
  );
};

export default SearchSection;