import React from 'react';
import styles from './HeaderMain.module.scss';
import icon from '../../assets/images/icon.png';

const HeaderMain = () => (

    <div className={styles.wrapper}>
        <img src={icon} alt="ikona kół zębatych"/>
        <h2>Kompleksowa obsługa techniczna nieruchomości</h2>
        <h3>Serwis 24h - 660 405 993</h3>
    </div>

);


export default HeaderMain;