import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/images/logodesktop.png';

const getCurrentYear = () =>{
    return new Date().getFullYear();
};

const Footer = () =>(
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <img src={logo} alt="logo firmy Sigma"/>
        </div>
        <div className={styles.right}>
            <p> &#169; {getCurrentYear()} Sigma. All rights reserved.</p>
        </div>
    </div>

);

export default Footer;