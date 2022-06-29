import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './css/index.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Plantilla from './components/Plantilla';
import Footer from './components/Footer';

document.title = "VOLATIL F.C.";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header lenguaje="ES" nombre="Paulo" />
    <Slider juego="Rainbow Six Siege" parrafo="Unlock gear and boosters to take your Operators to the next level — available for Prime members." strong="Free with Prime" button="Get in-game content" />
    <Plantilla mensaje="Partidos" />
    <Plantilla mensaje="Formacion" />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
