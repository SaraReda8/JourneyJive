import { React, useState } from 'react';
import styles from './Blog.module.css';
import about1 from '../../Assets/Images/blog1.webp';
import about2 from '../../Assets/Images/blog2.webp';
import about3 from '../../Assets/Images/blog3.webp';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import BlogImage from '../../Assets/Images/1.webp';
export default function Blog() {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Breadcrumbs title="The Ultimate Travel Blog for Every Wanderlust Soul" pagename="Blog"  bgImage={BlogImage}/>
      <div className={`row ${styles.borderSection}`}>
        <div className="col-md-6 d-flex justify-content-center mt-3">
          <img src={about3} alt="Culture" loading="lazy" className={`${styles.aboutImg} ${styles.imgAnimation}`} />
        </div>
        <div className="col-md-6">
          <h3 className={`${styles.title} ${styles.titleAnimation}`}>Cultural Immersion Like Never Before</h3>
          <p className={styles.text}>
            Journey Jive is all about helping you connect with the rich cultural tapestries of the world. Whether it's indulging in local cuisines, attending vibrant festivals, or participating in traditional crafts, we help you truly live the experience. Get ready to immerse yourself in the traditions, rituals, and lifestyles of the world's most diverse cultures...
            {showMore && (
              <span>
                From walking through the colorful streets of Morocco to cooking traditional dishes in Italy, each cultural experience we offer allows you to step into the heartbeat of a destination. These are not just tours; they are meaningful connections that will stay with you forever. Join us for a cultural journey that will change the way you see the world and leave you with lifelong memories.
              </span>
            )}
          </p>
          <button className={styles.readMoreBtn} onClick={toggleReadMore}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
      
      <div className={`row ${styles.borderSection}`}>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={about1} alt="Adventure" loading="lazy" className={`${styles.aboutImg} ${styles.imgAnimation}`} />
        </div>
        <div className="col-md-6">
          <h3 className={`${styles.title} ${styles.titleAnimation}`}>Unleash Your Spirit Of Adventure</h3>
          <p className={styles.text}>
            Explore the world beyond your imagination with Journey Jive! Whether you're a thrill-seeker looking for the best hiking spots, or a relaxation lover searching for serene beaches, we have something for everyone. Let us guide you through the world's most amazing destinations, from lush jungles to bustling metropolises...
            {showMore && (
              <span>
                We offer curated itineraries, tips, and hidden gems you won't find in typical tourist guides. Discover secret hideaways, breathtaking views, and immerse yourself in unique cultures that will leave you wanting more. Each trip with Journey Jive is not just a vacation, it's an experience designed to enrich your life and broaden your horizons. Trust us to make your adventure as unforgettable as the destinations themselves!
              </span>
            )}
          </p>
          <button className={styles.readMoreBtn} onClick={toggleReadMore}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      <div className={`row ${styles.borderSection}`}>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={about2} alt="Exploration" loading="lazy" className={`${styles.aboutImg} ${styles.imgAnimation}`} />
        </div>
        <div className="col-md-6">
          <h3 className={`${styles.title} ${styles.titleAnimation}`}>Explore The Hidden Wonders Of The World</h3>
          <p className={styles.text}>
            The world is full of secrets waiting to be uncovered. From ancient temples in the heart of the jungle to hidden beaches with crystal-clear waters, Journey Jive brings you closer to the lesser-known marvels that most tourists overlook. Our expert team handpicks the best off-the-beaten-path destinations...
            {showMore && (
              <span>
                Venture to places where nature reigns supreme and culture thrives away from the crowds. Experience the authenticity of destinations that are untouched by mass tourism. From the remote mountains of Peru to the secluded islands of the Philippines, your journey will be filled with awe-inspiring moments and unforgettable discoveries. With us, every trip is a new adventure in the unexplored!
              </span>
            )}
          </p>
          <button className={styles.readMoreBtn} onClick={toggleReadMore}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
      
      

      
    </>
  );
}
