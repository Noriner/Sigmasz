
import React from 'react';
import styles from './Modal.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Modal = ({ closeModalFn }) =>(
    <div className={styles.wrapper}>
        <div className={styles.navigation}>
            <button onClick={closeModalFn}><i class="fas fa-times"></i></button>
            <ul>
                <li><AnchorLink href='#zakresuslug'>zakres usług </AnchorLink></li>
                <li><AnchorLink href='#ofirmie'>o firmie </AnchorLink></li>
                <li><AnchorLink href='#oferta'>oferta </AnchorLink></li>
                <li><AnchorLink href='#kontakt'>kontakt </AnchorLink></li>
                <li><AnchorLink href='#top'><i class="fas fa-arrow-up"></i></AnchorLink></li>
            </ul>
        </div>
    </div>
);

export default Modal;