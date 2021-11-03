import React from "react";
import styles from './Arrow.module.scss';

function NextArrow(props) {
    const {onClick} = props;
    return (
      <button onClick={onClick} className={styles.prevwrapper}>
          <i class="fas fa-arrow-left"></i>
      </button>

      
    );
}

export default NextArrow;