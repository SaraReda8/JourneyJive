import styles from './TourGuide.module.css';

// Images (replace these with the actual paths to your imported images)
import guide1 from '../../assets/Images/guide5.webp';
import guide2 from '../../assets/Images/guide2.webp';
import guide3 from '../../assets/Images/guide3.webp';
import guide4 from '../../assets/Images/guide4.webp';
import guide5 from '../../assets/Images/client-2.webp';
import guide6 from '../../assets/Images/client-1.webp';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import TOURG from'../../assets/Images/1.webp';
const guides = [
  { id: 1, name: 'lili Zoher', role: 'Guide', image: guide1 },
  { id: 2, name: 'Ward Alexander', role: 'Guide', image: guide2 },
  { id: 3, name: 'Moog Reyad', role: 'Guide', image: guide3 },
  { id: 4, name: 'Mourad Mohamed', role: 'Guide', image: guide4 },
  { id: 5, name: 'Ola Emam', role: 'Guide', image: guide5 },
  { id: 6, name: 'Yahia Ehab', role: 'Guide', image: guide6 },
];

export default function TourGuide() {
  return (
    <>
      <Breadcrumbs title="Meet Our Excellent Guide’s" pagename="Tour Guide's" bgImage={TOURG} />
      <div className={styles.tourGuideContainer}>
        <div className={styles.cardsContainer}>
          {guides.map((guide, index) => (
            <div
              key={guide.id}
              className={styles.card}
              style={{ '--order': index }}
            >
              <img
                src={guide.image}
                alt={`Tour guide named ${guide.name}`}
                loading="lazy"
                className={styles.cardImage}
              />
              <div className={styles.cardInfo}>
                <h3>{guide.name}</h3>
                <p>{guide.role}</p>
              </div>
              <div className={styles.socialIcons}>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
