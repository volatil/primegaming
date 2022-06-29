import React, { Component } from 'react';
// import $ from 'jquery';

// import logo_primegaming from '../images/amazongaming.png';
import '../css/Slider.css';

class Slider extends Component {
	render(){
		return(
			<section id="slider">
				<div className="bajada">
					<h3>{ this.props.juego }</h3>
					<p>{ this.props.parrafo }</p>
					<strong>{ this.props.strong }</strong>
					<button>{ this.props.button }</button>
				</div>
				<div className="background">
					<video loop muted autoPlay playsInline>
						<source type="video/mp4" src="https://m.media-amazon.com/images/G/01/sm/amped/rss_S05/video_desktop_hero_2._CB1198675309_.mp4"></source>
					</video>
				</div>
			</section>
		);
	}
}
export default Slider;
