import React, { Component } from 'react';
// import $ from 'jquery';

import logo_primegaming from '../images/amazongaming.png';
import '../css/Header.css';

class Header extends Component {
	clickTest = () => {
		console.log( `click LOGO` );
	}
	navTestClick = ( params ) => {
		console.log( `click NAV` );
	}
	render(){
		return(
			<header>
				<div className="centrado">
					<img onClick={this.clickTest} className="logo" src={logo_primegaming} alt="Prime Gaming" />
				</div>
			</header>
		);
	}
}
export default Header;
