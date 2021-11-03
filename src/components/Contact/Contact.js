import React from 'react';
import styles from './Contact.module.scss';

const Contact = () =>(
    <div className={styles.wrapper}>
        <h3 id="kontakt">Kontakt</h3>
        <p>SIGMA - Serwis Techniczny Nieruchomości<br/> Tadeusz Szynkowski</p>
        <p>ul.Wąska 13, Jeziórko<br/>05-540 Zalesie Górne</p>
        <p>NIP: 1230061000</p>
        <p>TEL: 660 405 993<br/>E-MAIL:sigmasz@home.pl</p>
    </div>
);

export default Contact;