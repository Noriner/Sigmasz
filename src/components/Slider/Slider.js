import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './Slider.module.scss';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import instalacjegrzewcze from '../../assets/images/instalacjegrzewcze.jpg';
import instalacjehydrauliczne from '../../assets/images/instalacjehydrauliczne.jpg';
import elektryka from '../../assets/images/elektryka.jpg';
import ppoz from '../../assets/images/instalacjappoz.jpg';
import vent from '../../assets/images/wentylacja.jpg';
import bramy from '../../assets/images/bramy.jpg';
import bms from '../../assets/images/bms.jpg';
import makieta from '../../assets/images/makieta.jpg';
import gas from '../../assets/images/gazomierz.jpg';

var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed:300,
    responsive: [
        {
            breakpoint: 1250,
            settings:{
                slidesToShow: 3
            }
        },
        {
            breakpoint: 950,
            settings:{
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 750,
            settings:{
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
};

export default class TestSlider extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
    }
  
    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
  
    render() {
      return (
        <div>
          <Slider {...settings}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            className={styles.slider}
            focusOnSelect={true}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            <div><img src={instalacjegrzewcze} alt="Zdjęcie instalacje grzewcze"/><h4>Instalacje grzewcze</h4></div>
            <div><img src={instalacjehydrauliczne} alt="Zdjęcie instalacji hydraulicznych"/><h4>Instalacje hydrauliczne</h4></div>
            <div><img src={elektryka} alt="Zdjęcie instalacji elektrycznej"/><h4>Instalacje elektryczne</h4></div>
            <div><img src={ppoz} alt="Zdjęcie instalacje przeciwpożarowe"/><h4>Instalacje przeciwpożarowe</h4></div>
            <div><img src={vent} alt="Zdjęcie instalacje wentylacyjne"/><h4>Klimatyzacja</h4></div>
            <div><img src={vent} alt="Zdjęcie instalacje wentylacyjne"/><h4>Wentylacja</h4></div>
            <div><img src={bramy} alt="Zdjęcie szlabanu"/><h4>Szlabany i bramy</h4></div>
            <div><img src={bms} alt="Zdjęcie oprogramowania BMS"/><h4>Automatyka BMS</h4></div>
            <div><img src={makieta} alt="Zdjęcie makiety budynku"/><h4>Monitoring i alarmy</h4></div>
            <div><img src={gas} alt="Zdjęcie gazomierza"/><h4>Instalacje gazowe</h4></div>
          </Slider>
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            className={styles.infoslider}
            swipe={false}
            arrows={false}
          >
            <div>
                <div className={styles.info}>
                    <h3>Instalacje grzewcze</h3>
                    <h4>Konserwacja instalacji cetralnego ogrzewania</h4>
                    <ul>
                        <li>konserwacja zaworów odcinających</li>
                        <li>usuwanie strefowych niedogrzewań</li>
                        <li>odpowietrzanie instalacji</li>
                        <li>kontrola automatyki węzłów cieplnych</li>
                        <li>czyszczenie filtrów siatkowych</li>
                        <li>czyszczenie odmulaczy</li>
                        <li>kontrola oraz uzupełnienie ciśnienia zładu</li>
                        <li>kontrola ciepłomierzy</li>
                        <li>kontrola pomp</li>
                        <li>konserwacja urządzeń przeponowych</li>
                        <li>likwidacja nieszczelności instalacji</li>
                        <li>konserwacja kotłów gazowych</li>
                        <li>konserwacja wymienników ciepła</li>
                        <li>konserwacja zasobników CWU</li>
                        <li>konserwacja zaworów regulacyjnych</li>
                        <li>konserwacja zaworów bezpieczeństwa</li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <div className={styles.helper}><img src={instalacjegrzewcze} alt="Zdjęcie instalacje grzewcze"/></div>
                </div>
            </div>
            <div>
                <div className={styles.info}>
                    <h3>Instalacje hydrauliczne</h3>
                    <h4>Konserwacja instalcji kanalizacji sanitarnej i deszczowej</h4>
                    <ul>
                        <li>udrażnianie oraz czyszczenie instalacji kanalizacyjnej</li>
                        <li>udrażnianie kanalizacji spiralą kanalizacyjną</li>
                        <li>czyszczenie wpustów dachowych i posadzkowych</li>
                        <li>przegląd przewodów kanalizacyjnych kamerą wizyjną</li>
                    </ul>
                    <h4>Konserwacja instalacji zimnej i ciepłej wody</h4>
                    <ul>
                        <li>konserwacja stacji uzdatniania wody</li>
                        <li>kontrola zestawów pompowych</li>
                        <li>kontrola wodomierzy</li>
                        <li>konserwacja zaworów odcinających</li>
                        <li>konserwacja urządzeń przeponowych</li>
                        <li>konserwacja zaworów regulacyjnych</li>
                    </ul>
                    <h4>Konserwacja separatorów</h4>
                    <ul>
                        <li>stała kontrola czystości</li>
                        <li>kontrola filtrów</li>
                        <li>kontrola pomp pływakowych</li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <div className={styles.helper}><img src={instalacjehydrauliczne} alt="Zdjęcie instalacje hydrauliczne"/></div>
                </div>
            </div>
            <div>
                <div className={styles.info}>
                    <h3>Instalacje Elektryczne</h3>
                    <h4>Konserwacja instalacji elektrycznej</h4>
                    <ul>
                        <li>konserwacja oświetlenia zewnętrznego</li>
                        <li>konserwacja oświetlenia wewnętrznego</li>
                        <li>konserwacja oświetlenia awaryjnego i ewakuacyjnego</li>
                        <li>konserwacja rozdzielnic administracyjnych</li>
                        <li>wymiana źródeł światła</li>
                        <li>wymiana zabezpieczeń topikowych</li>
                        <li>konserwacja automatów zmierzchowych</li>
                        <li>okresowe pomiary instalacji</li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <div className={styles.helper}><img src={elektryka} alt="Zdjęcie instalacji elektrycznej"/></div>
                </div>
            </div>
            <div>
                <div className={styles.info}>
                    <h3>Instalacje przeciwpożarowe</h3>
                    <h4>Konserwacja instalacji tryskaczowej</h4>
                    <ul>
                        <li>konserwacja czujników</li>
                        <li>kontrola systemu i urządzeń alarmowych</li>
                        <li>konserwacja zaworów pływakowych</li>
                        <li>konserwacja zasuw</li>
                        <li>konserwacja pomp</li>
                        <li>okresowe testy instalacji</li>
                    </ul>
                    <h4>Konserwacja instalacji hydrantowej</h4>
                    <ul>
                        <li>kontrola zaworów</li>
                        <li>kontrola zespołów pompowych</li>
                        <li>kontrola naczyń przeponowych</li>
                        <li>kontrola szaf p.poż.</li>
                    </ul>
                    <h4>Konserwacja instalacji SAP</h4>
                    <ul>
                        <li>kontrola centrali przeciwpożarowej</li>
                        <li>kontrola sygnalizacji</li>
                        <li>kontrola czujek</li>
                        <li>kontrola ROP</li>
                        <li>obsługa i kontrola centrali pożarowej Aritech FP</li>
                    </ul>

                </div>
                <div className={styles.image}>
                    <div className={styles.helper}><img src={ppoz} alt="Zdjęcie instalacje przeciwpożarowe"/></div>
                </div>
            </div>
            <div>
                <div className={styles.info}>
                    <h3>Klimatyzacja</h3>
                    <h4>Konserwacja klimatyzacji</h4>
                    <ul>
                        <li>konserwacja sprężarek</li>
                        <li>konserwacja chłodnic</li>
                        <li>kontrola zaworów regulacyjnych</li>
                        <li>czyszczenie filtrów siatkowych</li>
                        <li>konserwacja zaworów odcinających</li>
                        <li>konserwacja agregatów wody lodowej</li>
                        <li>kontrola czynnika chłodniczego</li>
                        <li>wymiana filtrów powietrza</li>
                        <li>kontrola skraplaczy</li>
                        <li>kontrola oraz regulacja sterowników</li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <div className={styles.helper}><img src={vent} alt="Zdjęcie instalacje wentylacyjne"/></div>
                </div>
            </div>
            <div>
                <div className={styles.info}>
                    <h3>Wentylacja</h3>
                    <h4>Konserwacja wentylacji</h4>
                    <ul>
                        <li>czyszczenie kanałów wentylacyjnych</li>
                        <li>konserwacja oraz regulacja wentylatorów dachowych i zewnętrznych</li>
                        <li>konserwacja oraz regulacja wentylatorów kanałowych</li>
                        <li>konserwacja wymienników</li>
                        <li>konserwacja central wentylacyjnych</li>
                        <li>kontrola wyrzutni oraz czerpni wentylacyjnychkonserwacja agregatów wody lodowej</li>
                        <li>konserwacja bloku lamelowego nagrzewnicy i chłodnicy</li>
                        <li>wymiana filtrów powietrza</li>
                        <li>przegląd przewodów wentylacyjnych kamerą wizyjną</li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <div className={styles.helper}><img src={vent} alt="Zdjęcie instalacje wentylacyjne"/></div>
                </div>
            </div>
            <div>
                <div className={styles.info}>
                    <h3>Szlabany i bramy</h3>
                    <h4>Konserwacja szlabanów</h4>
                    <ul>
                        <li>kontrola mechaniki</li>
                        <li>kontrola czujek</li>
                        <li>konserwacja automatyki</li>
                        <li>kontrola stanu oleju i ewentualna jego wymiana</li>
                    </ul>
                    <h4>Konserwacja bram ogrodzeniowych i garażowych</h4>
                    <ul>
                        <li>kontrola siłowników</li>
                        <li>kontrola fotokomórek</li>
                        <li>kontrola stanu oleju i ewentualna jego wymiana w przekładniach</li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <div className={styles.helper}><img src={bramy} alt="Zdjęcie szlabanu"/></div>
                </div>
            </div>
            <div>
                <div className={styles.info}>
                    <h3>Automatyka BMS</h3>
                    <h4>System autmatuki BMS oparty na oprogramowani Kieback&Peter</h4>
                    <ul>
                        <li>kontrola i zarządzanie systemem</li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <div className={styles.helper}><img src={bms} alt="Zdjęcie oprogramowania BMS"/></div>
                </div>
            </div>
            <div>
                <div className={styles.info}>
                    <h3>Monitoring i alarmy</h3>
                    <h4>Konserwacja systemów i urządzeń alarmowych</h4>
                    <ul>
                        <li>konsewacja central, czujników i zasilaczy</li>
                    </ul>
                    <h4>Konserwacja systemów kontoli dostępu</h4>
                    <ul>
                        <li>konserwacja czytników i oprogramowania systemowego</li>
                        <li>konserwacja sterowników i kontrolerów</li>
                    </ul>
                    <h4>Konserwacja systemu monitoringu</h4>
                    <ul>
                        <li>konserwacja i regulacja kamer</li>
                        <li>obsługa monitorów i urządzeń rejestrujących</li>
                    </ul>
                    <h4>Konserwacja instalcji domofonowych i systemów wideo</h4>
                    <ul>
                        <li>konserwacja domofonów i wideo-domofonów</li>
                        <li>konserwacja podzespołów mechanicznych i elektrycznych</li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <div className={styles.helper}><img src={makieta} alt="Zdjęcie makiety budynku"/></div>
                </div>
            </div>
            <div>
                <div className={styles.info}>
                    <h3>Instalacje gazowe</h3>
                    <h4>Konserwacja systemu detekcji tlenku węgla</h4>
                    <ul>
                        <li>kontrola sterowania</li>
                        <li>kontrola detektorów</li>
                        <li>kontrola transparentów</li>
                        <li>kontrola sygnalizatorów dźwiękowych</li>
                    </ul>
                    <h4>Konserwacja instalacji gazowej</h4>
                    <ul>
                        <li>kontrola szczelności</li>
                        <li>konserwacja zaworów</li>
                        <li>konserwacja stacji pomiarowych i liczników</li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <div className={styles.helper}><img className={styles.gas}src={gas} alt="Zdjęcie gazomierza"/></div>
                </div>
            </div>
          </Slider>          
        </div>
      );
    }
}

