import React from "react";
import styles from "./Reviews.module.css";

// Importing images
import client1 from "../../Assets/Images/client-1.webp";
import client2 from "../../Assets/Images/client-2.webp";
import client4 from "../../Assets/Images/client-4.webp";

export default function Reviews() {
  const reviews = [
    {
      rating: 5,
      text: "JourneyJive has completely transformed my travel experience. From finding hidden gems in bustling cities to discovering serene retreats off the beaten path, every detail was thoughtfully arranged. I can't recommend JourneyJive enough for anyone looking to elevate their travel experience!",
      img: client1,
      name: "Micheal Mourad",
      role: "Travel Blogger",
    },
    {
      rating: 5,
      text: "My recent adventure with JourneyJive was nothing short of spectacular. The personalized itineraries and recommendations they provided led me to extraordinary locations that I would never have found on my own. I'm already planning my next adventure with them!",
      img: client2,
      name: "Natlie Nezar",
      role: "Adventure Enthusiast",
    },
  
    {
      rating: 4,
      text: "Finding a balance between work and travel can be challenging, but JourneyJive made it effortless. Their efficient planning and excellent recommendations helped me maximize my downtime and enjoy every moment of my trip. I look forward to working with them again on future travels.",
      img: client4,
      name: "Mohamed Momtaz",
      role: "Business Executive",
    },
  ];

  return (
    <>
         
       <section className={styles.container}>
      <h2 className={styles.header}>Loved By Over Thousand Travelers</h2>
      <p className={styles.description}>
        Discover the stories of wanderlust and cherished memories through the eyes of our valued clients.
      </p>
      <div className={styles.cards}>
        {reviews.map((review, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.content}>
              {/* Render 5 stars for each review */}
              <div className={styles.rating}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <i className="ri-star-fill" key={i}></i>
                ))}
              </div>
              <p>{review.text}</p>
            </div>
            <div className={styles.details}>
              <img
                src={review.img}
                alt={`Client ${review.name}`}
                loading="lazy"
              />
              <div>
                <h4>{review.name}</h4>
                <h5>{review.role}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
 
  );
}
