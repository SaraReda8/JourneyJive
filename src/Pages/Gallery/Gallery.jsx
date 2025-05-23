import styles from './Gallery.module.css';

import img1 from '../../assets/Images/v1.jpg';
import img2 from '../../assets/Images/v2.jpg';
import img3 from '../../assets/Images/v3.jpg';
import img4 from '../../assets/Images/v4.jpg';
import img5 from '../../assets/Images/Maldives2.jpg';
import img6 from '../../assets/Images/v5.jpg';
import img7 from '../../assets/Images/v6.jpg';
import img8 from '../../assets/Images/v7.jpg';
import img9 from '../../assets/Images/turkey-holiday.jpg';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import GalleryImage from '../../assets/Images/1.webp';
export default function Gallery() {
    const galleryImages = [
      [img1, img2, img3, img4], 
      [img5, img6],            
      [img7, img8, img9],      
    ];

    const locations = [
      "Cairo, Egypt",
      "Rome, Italy",
      "Paris, France",
      "Tokyo, Japan",
      "Maldives",
      "New York, USA",
      "Sydney, Australia",
      "Rio de Janeiro, Brazil",
      "Istanbul, Turkey",
    ];

    return (
      <>
        <Breadcrumbs pagename="Gallery" title='Discover the World Through Our Lens' bgImage={GalleryImage} />
        <section className={styles.gallerySection}>
          {galleryImages.map((row, rowIndex) => (
            <div className={styles.gridRow} key={`row-${rowIndex}`}>
              {row.map((image, index) => (
                <div className={styles.imageContainer} key={index}>
                  <img
                    src={image}
                    alt={`Gallery item ${rowIndex * 4 + index + 1}`}
                    loading="lazy"
                    className={styles.galleryImage}  />
                  <div className={styles.tooltip}>
                    {locations[rowIndex * 4 + index]}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
      </>
    );
}