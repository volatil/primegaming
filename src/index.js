import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './css/index.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Promo from './components/Promo';
import Footer from './components/Footer';

document.title = "VOLATIL F.C.";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header lenguaje="ES" nombre="Paulo" />
    <Slider juego="Rainbow Six Siege" parrafo="Unlock gear and boosters to take your Operators to the next level — available for Prime members." strong="Free with Prime" button="Get in-game content" />
    <div id="modulo">
        <div>
            <h3>Ending soon items, <strong>free width Prime</strong></h3>
        </div>
        <div className="promos">
	        <Promo imagen="https://images-na.ssl-images-amazon.com/images/I/41Zs6o5bokL.jpg" titulo="Fall Guys: The Amazing Falldazzler Bundle" claim="no"  />
	        <Promo imagen="https://images-na.ssl-images-amazon.com/images/I/51K3zrW2U3L.jpg" titulo="Get up to GTA$300,000 this week in GTA Online" claim="si"  />
	        <Promo imagen="https://images-na.ssl-images-amazon.com/images/I/41hsdy6jAnL.jpg" titulo="Pokémon GO: Prime Gaming Bundle #3" claim="no"  />
	        <Promo imagen="https://images-na.ssl-images-amazon.com/images/I/411gArERiJL.jpg" titulo="WRC 8 FIA World Rally Championship" claim="no"  />
	        <Promo imagen="https://images-na.ssl-images-amazon.com/images/I/61IncPBbTCL.jpg" titulo="Red Dead Online: Get the Gentle Wave Greet Emote and more" claim="si"  />
	        <Promo imagen="https://images-na.ssl-images-amazon.com/images/I/418oPLFVVvL.jpg" titulo="Destiny 2: Polaris Lance Exotic Bundle Drop" claim="no"  />
	        <Promo imagen="https://images-na.ssl-images-amazon.com/images/I/6125qzMlBdL.jpg" titulo="New World: Holy Vanguard Pack II" claim="no"  />
	        <Promo imagen="https://images-na.ssl-images-amazon.com/images/I/413zGi+7-lL.jpg" titulo="Far Cry 4 on Ubisoft Connect" claim="no"  />
	        <Promo imagen="https://images-na.ssl-images-amazon.com/images/I/51yzRh73sPL.jpg" titulo="Calico" claim="no"  />
	        <Promo imagen="https://images-na.ssl-images-amazon.com/images/I/41INOCBnr0L.jpg" titulo="League of Legends: Prime Gaming Capsule" claim="no"  />
        </div>
    </div>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
