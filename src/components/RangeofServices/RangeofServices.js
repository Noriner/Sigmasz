import React from 'react';
import styles from './RangeofServices.module.scss';
import logo from '../../assets/images/logodesktop.png';

const RangeofServices = () =>(
    <div className={styles.wrapper}>
        <img id='zakresuslug' src={logo} alt="logo firmy Sigma"/>  
        <div className={styles.main}>
            <div className={styles.maininfo}><p>Firma SIGMA od 2007r. świadczy kompleksowe usługi techniczne w zakresie obsługi oraz konserwacji urządzeń i poszczególnych instalacji znajdujących się w budynkach mieszkalnych oraz biurowych.</p></div>
            <div className={styles.left}>
                <p>Zajmujemy się między innymi konserwacją oraz zarządzaniem następujących instalacji oraz systemów:</p>
            <ul>
                <li>instalacje grzewcze</li>
                <li>instalacje elektryczne</li>
                <li>instalacje stanitarne</li>
                <li>instalacje przeciwpożarowe</li>
                <li>instalacje oświetlenia awaryjnego i ewakuacyjnego</li>
                <li>systemy monitoringu</li>
                <li>systemy alarmowe</li>
                <li>systemy bram wjazdowych, ogrodzeniowych i szlabanów</li>
                <li>systemy automatyki BMS opartej na oprogramowaniu Kieback & Peter</li>
                <li>systemy wentylacyjne i klimatyzacyjne</li>
                <li>system centrali pożarowej Aritech FP</li>
            </ul>
            </div>
            <div className={styles.right}>
                <p>Proponujemy również usługi z zakresu:</p>
            <ul>
                <li>prowadzenia gospodarki odpadami stałymi i płynnymi</li>
                <li>napraw remontowo-budowlanych</li>
            </ul>
            <p>Swoim klientom gwarantujemy profesjonalną, uczciwą i terminową obsługę - zgodnie z zapisami ujętymi w DTR. Każdego kontrahenta traktujemy w sposób indywidualny, dopasowując zakres i kształt poszczególnych usług do jego potrzeb.</p>
            <p>Serdecznie zapraszamy do zapoznania się z naszą pełną ofertą. Z przyjemnością odpowiemy także na wszelkie Państwa pytania.</p>
            </div>
        </div>
    </div>
);

export default RangeofServices;