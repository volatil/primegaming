import React, { Component } from 'react';
// import $ from 'jquery';

// import logo_primegaming from '../images/amazongaming.png';
import '../css/Promo.css';

class Promo extends Component {

	claim = () => {
		let canjeado = this.props.claim;
		if( canjeado === "no" ) {
			return <button>Claim</button>;
		} else {
			return <div className="collected">
					<span></span>
					<p>Collected</p>
				</div>;
		};
		
	}
	
	claimClase = () => {
		let reclamado = this.props.claim;
		if ( reclamado === "no" ) {
			return `promo no`;
		} else {
			return `promo claim`;
		}
	}
	
	render(){
		return(
			// <section className="promo">
			<section className={ this.claimClase() }>
				<img src={ this.props.imagen } alt={ this.props.titulo } />
				<div className="countdown">
					<p>Ends in <strong>14 days</strong></p>
				</div>
				<p>{ this.props.titulo }</p>
				{ this.claim() }
			</section>
		);
	}
}
export default Promo;
