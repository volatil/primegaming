import React, { Component } from 'react';
// import $ from 'jquery';

// import logo_primegaming from '../images/amazongaming.png';
import '../css/Slider.css';

class Slider extends Component {
	render(){
		return(
			<section id="slider">
				<img src={ this.props.banner } alt={ this.props.juego } />
			</section>
		);
	}
}
export default Slider;
