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
    <Header />
    <Slider banner="https://m.media-amazon.com/images/G/01/sm/amped/valorantS05/drop1/hero/update/desktop_hero_2x.jpg" juego="Valorant" />
    <Plantilla mensaje="Partidos" />
    <Plantilla mensaje="Formacion" />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
