import React from 'react';
import styles from './Offer.module.scss';
import TestSlider from '../Slider/Slider';

const Offer = () => (
    <div className={styles.wrapper}> 
        <h3 id="oferta">Oferta</h3>
        <p>Oferujemy kompleksową obsługę nieruchomości, dostępną 24h na dobę. W swojej ofercie posiadamy szeroki wachlarz usług w postaci renowacji i obsługi instalacji budynków.</p>
        <TestSlider />
        
    </div>
    
);

export default Offer;