import React from 'react';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav';
import HeaderMain from './HeaderMain';


const Header = ({ openModalFn}) => (
    <header className={styles.wrapper}>
        <HeaderNav />
        <HeaderMain />
        <div className={styles.helper}>
            <button className={styles.burgermenu} onClick={openModalFn}><i class="fas fa-bars"></i></button>
        </div>
        
    </header>
);

export default Header;