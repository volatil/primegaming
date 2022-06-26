import React, { Component } from 'react';
// import $ from 'jquery';

// import logitoVolatil from './images/logo.png';
// import './css/Header.css';

class Plantilla extends Component {
	// componentDidMount(){
	// 	document.title = "VOLATIL F.C. | Plantilla";
	// }
	render(){
		let mensaje         = this.props.mensaje;
		let mensaje_bajita  = mensaje.toLowerCase();
		return(
			// <section className={mensaje}>
			<section className={mensaje_bajita}>
				<h2>{this.props.mensaje}.js</h2>
			</section>
		);
	}
}
export default Plantilla;
