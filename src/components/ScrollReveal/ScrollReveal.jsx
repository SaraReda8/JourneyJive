import React, { useRef, useEffect, useState } from "react";
import styles from "./ScrollReveal.module.css";

const ScrollReveal = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // ✅ خزن القيمة
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
  
    if (currentRef) observer.observe(currentRef);
  
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);
  
  return (
    <div ref={ref} className={`${styles.container} ${isVisible ? styles.show : ""}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
