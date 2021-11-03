import React from "react";
import styles from './Arrow.module.scss';

function NextArrow(props) {
    const {onClick} = props;
    return (
      <button onClick={onClick} className={styles.nextwrapper}>
          <i class="fas fa-arrow-right"></i>
      </button>

      
    );
}

export default NextArrow;