import React, { Component } from 'react';
// import $ from 'jquery';

// import logitoVolatil from './images/logo.png';
// import './css/Header.css';

class Partidos extends Component {
	componentDidMount(){
		document.title = "VOLATIL F.C. | Partidos";
	}
	render(){
		return(
			<section className="partidos">
				<h2>Partidos.js</h2>
			</section>
		);
	}
}
export default Partidos;
