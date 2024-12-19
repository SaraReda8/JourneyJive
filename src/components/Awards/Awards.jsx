import React from "react"
import styles from "./Awards.module.css"

const Awards = () => {
    const awards = [
      {
        icon: <i className='fa-solid fa-trophy'></i>,
        num: "32 M",
        name: "Blue Burmin Award",
      },
      {
        icon: <i className='fa-solid fa-briefcase'></i>,
        num: "43 M",
        name: "Mimo X11 Award",
      },
      {
        icon: <i className='fa-solid fa-lightbulb'></i>,
        num: "51 M",
        name: "Australian UGC Award",
      },
      {
        icon: <i className='fa-solid fa-heart'></i>,
        num: "42 M",
        name: "IITCA Green Award",
      },
    ];
  
    const Heading = ({ title, subtitle }) => {
      return (
        <div className='heading'>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      );
    };
  
    return (
      <section className={styles.awards}>
        <div className={styles.container}>
          <Heading title="Over 1,24,000+ Happy Users Being With Us Still They Love Our Services" subtitle="Our Awards"  className="text-dark"/>
  
          <div className={`${styles.content} ${styles.grid4} ${styles.mtop}`}>
            {awards.map((val, index) => (
              <div className={styles.box} key={index}>
                <div className={styles.icon}>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Awards;
  
