import PropTypes from 'prop-types';
import styles from './CityBreakCard.module.css';

export default function CityBreakCard({ itemImage, itemTitle, itemSubTitle, itemNights, itemPrice, starRating }) {
  return (
    <div className={`card shadow ${styles.cityBreakCard}`}>
      <img
        src={itemImage}
        alt={itemTitle}
        loading="lazy"
        className={`${styles.cardImage} img-hover`}
      />
      <div className="card-body">
        <h5 className={`card-title ${styles.cardTitle}`}>{itemTitle}</h5>
        <p className="card-subtitle mb-2 text-muted">{itemSubTitle}</p>
        <p className="card-text">{itemNights} </p>
        <p className={`text-left text-main`}>${itemPrice}</p>
      </div>
    </div>
  );
}

CityBreakCard.propTypes = {
  itemImage: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemSubTitle: PropTypes.string.isRequired,

};
