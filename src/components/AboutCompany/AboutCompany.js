import React from 'react';
import styles from './AboutCompany.module.scss';

const AboutCompany = () => (
    <div className={styles.wrapper}>
        <h3 id="ofirmie">O firmie</h3>
        <hr/>
        <div className={styles.textbox}>
            <div className={styles.left}>
                <p>Firma SIGMA od 2007 roku prężnie działa na rynku usług technicznych dla zarządców i właścicieli obiektów budowlanych. Naszym zadaniem jest by odpowiednio dbać i zarządzać powierzonymi nam instalacjami i urządzeniami. Nasz zespół posiada odpowiednie kwalifikacje i jest przygotowany do rozwiązywania wszelkich problemów technicznych, które bezpośrednio dotyczą obiektów oraz najemców podnajmujących powierzchnie użytkowe.</p>
                <p>Nasza oferta odnosi się do wszystkich grup urządzeń działających wewnątrz budynku - w tym w tzw. budynkach inteligentnych. Naszym zadaniem jest również dbanie o utrzymanie na najniższym poziomie kosztów związanych z wydatkami na zakup energii elektrycznej, gazu, wody, poprzez prawidłową eksploatację i kontrolę zmian w przepisach umożliwiających zmniejszenie tych wydatków.</p>
            </div>

            <div className={styles.right}>
                <p>W każdym przypadku pod pojęciem eksploatacji rozumiemy długotrwałą i dobrze zaplanowaną działalność. Naszą pracę bazujemy na długofalowym planowaniu oraz zarządzaniu poszczególnymi instalacjami, co gwarantuje wysoką skuteczność oraz ekonomiczność procesów konserwacyjnych i eksploatacyjnych. Gwarantujemy profesjonalizm i terminowość. Ponadto, do Państwa dyspozycji pozostawiamy 24-godzinny serwis interwencyjny, działający także w dni wolne od pracy, gwarantujący natychmiastową pomoc w sytuacjach kryzysowych.</p>
            </div>
        </div>
    </div>
);

export default AboutCompany;