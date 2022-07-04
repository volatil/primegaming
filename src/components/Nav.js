import React, { Component } from 'react';
import $ from 'jquery';

import '../css/Nav.css';

class Nav extends Component {
	render(){
		var algo = function() {
			let algo = $( this ).parent().html();
			console.log( `click ${algo}` );
		}
		return(
			<section className="nav">
				<div className="centrado">
					<nav>
						<ul onClick={algo}>
							<li className="activo">All</li>
							<li>In-game content</li>
							<li>Prime Day</li>
						</ul>
					</nav>
					<div className="buscador">
						<input placeholder="Search Prime Gaming"></input>
					</div>
				</div>
			</section>
		);
	}
}
export default Nav;
