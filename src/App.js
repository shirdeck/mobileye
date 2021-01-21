import React from 'react'
import GlobalStyle from './globalStyles'
import "./App.css";
import Hero from "./components/Hero/Hero";
import { homeObjOne, homeObjTwo, homeObjThree } from './components/InfoSection/Data';
import InfoSection from './components/InfoSection/index';
import FormWrapper from './components/Form/Form'
import ImgWrapper from './components/Img';
import ReactPlayer from "react-player";

// Main app where all components are rendered from

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <>
      <Hero/>
      <InfoSection {...homeObjOne}><FormWrapper/></InfoSection>
      <InfoSection {...homeObjTwo}><ReactPlayer url="https://youtu.be/EceAB6TUYzo"/></InfoSection>
      <InfoSection {...homeObjThree}><ImgWrapper/></InfoSection>
      <div className="footer">Ⓒ Mobileye Vision Technologies LTD 2019</div>
      </>
    </div>

  );
}

export default App;
