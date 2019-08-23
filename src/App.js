import React from 'react';
//import './assets/css/bootstrap-grid.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
//import './assets/fontAwesome/css/fontawesome.min.css';
//import './assets/fontAwesome/css/all.min.css';
import './assets/scss/main.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Templates from './components/Templates';
import Effect from './components/Effect';
//import PhotoEdit from './components/PhotoEdit';
import Slide from './components/Slide';
import SliderCom from './components/SliderCom';
import AccordionCom from './components/AccordionCom';

//import Filter from './components/Filter';
//import Frame from './components/Frame';
//import GetToday from './components/GetToday';
//import AppFeature from './components/AppFeature';
import WOW from 'wowjs';
function App() {
 
    new WOW.WOW().init();

  return (
    <div className="App">
    <Header/>
      <Welcome/>
      <Templates/>
      <Effect/>
      <Slide/>
      <SliderCom/>
      <AccordionCom/>
      {/* <Templates/> */}
    </div>
  );
}

export default App;
