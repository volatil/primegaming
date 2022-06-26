import React, { Component } from 'react';
// import $ from 'jquery';

import logitoVolatil from './images/logo.png';
import './css/Header.css';

class Header extends Component {
	clickTest = () => {
		console.log( `click LOGO` );
	}
	navTestClick = ( params ) => {
		console.log( `click NAV` );
	}
	render(){
		return(
			<React.Fragment>
				<header>
					<img onClick={this.clickTest} className="logo" src={logitoVolatil} alt="Volatil F.C." />
					<nav>
						<ul>
							<li onClick={this.navTestClick} data-menu="inicio" className="active">inicio</li>
							<li onClick={this.navTestClick} data-menu="partidos">partidos</li>
							<li onClick={this.navTestClick} data-menu="formacion">formacion</li>
						</ul>
					</nav>
				</header>
				<span className="espaciador"></span>
			</React.Fragment>
		);
	}
}
export default Header;
