import React, { useEffect, useState  } from 'react';
import styles from './BackToTop.module.scss';

export default function BackToTop() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
    };

    const backToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return(
        <div className={styles.wrapper}>
            {isVisible && (
            <div className={styles.buttonback} onClick={backToTop}><i class="fas fa-arrow-up"></i></div>
            )}
        </div>
       
    );
}