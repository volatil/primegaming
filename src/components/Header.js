import React, { Component } from 'react';
// import $ from 'jquery';

import logo_primegaming from '../images/amazongaming.png';
import '../css/Header.css';

class Header extends Component {
	clickTest = () => {
		console.log( `click LOGO` );
	}
	render(){
		let titlealt = "Prime Gaming";
		return(
			<header>
				<div className="centrado">
					<div className="logo">
						<img onClick={this.clickTest} src={logo_primegaming} alt={ titlealt } />
					</div>
					<div className="dash">
						<div className="lenguaje">
							<div>
								<span className="planeta"></span>
								<strong>{ this.props.lenguaje }</strong>
								<span className="arrow"></span>
							</div>
						</div>
						<div className="usuario">
							<div>
								<span className="user"></span>
								<strong>{ this.props.nombre }</strong>
								<span className="arrow"></span>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
export default Header;
