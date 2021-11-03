import './App.css';
import Header from './components/Header/Header';
import RangeofServices from './components/RangeofServices/RangeofServices';
import AboutCompany from './components/AboutCompany/AboutCompany';
import Contact from './components/Contact/Contact';
import Offer from './components/Offer/Offer';
import Footer from './components/Footer/Footer';
import React from 'react';
import Modal from './components/Modal/Modal';
import BackToTop from './components/BackToTop/BackToTop';



class App extends React.Component {

  state={
    isModalOpen: false,
  }

  openModal = () =>{
    this.setState({
      isModalOpen: true,
    })
  }
  closeModal = () =>{
    this.setState({
      isModalOpen: false,
    })
  }

  render(){
    const { isModalOpen } = this.state;
  return (
    <div>
      <BackToTop />
      <Header openModalFn={this.openModal} />
      <RangeofServices />
      <AboutCompany />
      <Offer />
      <Contact />
      <Footer />
      { isModalOpen && <Modal closeModalFn={this.closeModal} /> }
    </div>
  );
  }
}

export default App;
