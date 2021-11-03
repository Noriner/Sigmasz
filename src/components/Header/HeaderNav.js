import React from 'react';
import styles from './HeaderNav.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const HeaderNav = () => (
    <div id="top" className={styles.wrapper}>
        <div className={styles.logo}>
            <h1>Sigma</h1>
            <h2>Serwis Techniczny</h2>
        </div>

        <div className={styles.navigation}>
            <ul>
                <li><AnchorLink href='#zakresuslug'>zakres usług </AnchorLink></li>
                <li><AnchorLink href='#ofirmie'>o firmie </AnchorLink></li>
                <li><AnchorLink href='#oferta'>oferta </AnchorLink></li>
                <li><AnchorLink href='#kontakt'>kontakt </AnchorLink></li>
            </ul>
        </div>

    
    </div>
);

export default HeaderNav;