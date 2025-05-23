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
  

  
    return (
      <section className={styles.awards}>
        <div className={styles.container}>
          <h1>Over 1,24,000+ Happy Users Being With Us Still They Love Our Services</h1>
          <p className="seccolor" >Our Awards</p>
  
          <div className={`${styles.content} ${styles.grid4} ${styles.mtop}`}>
            {awards.map((val, index) => (
              <div className={styles.box} key={index}>
                <div className={styles.icon}>
                  <span>{val.icon}</span>
                </div>
                <h2>{val.num}</h2>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Awards;
  
