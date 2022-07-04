import React, { Component } from 'react';
// import $ from 'jquery';

// import logo_primegaming from '../images/amazongaming.png';
import '../css/Slider.css';

class Slider extends Component {
	  
	render(){
		var juego = {
			nombre  : this.props.juego ,
			parrafo : this.props.parrafo ,
			video   : "" ,
			button  : this.props.button ,
		}
		
		var numeroRandomsss = parseInt( Math.random()*10 )
		if ( numeroRandomsss === 0 ) {
			juego["nombre"] = "Fall Guys!";
			juego["parrafo"] = "Spicy jalapeno jerky swine pig, frankfurter kielbasa turkey tail fatback leberkas andouille tongue. Shankle turducken rump jerky, meatloaf cow pork chop ";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/SM/Amped/FallGuysS2/Drop7/desktop_hero_2x.jpg";
		} else if ( numeroRandomsss === 1 ) {
			juego["nombre"] = "Puzzle";
			juego["parrafo"] = "Rump beef burgdoggen, capicola chuck doner porchetta pastrami sirloin picanha tenderloin ribeye fatback swine strip steak. ";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/LegacyGames/PuzzleOfTheYear/Puzzle_of_the_Year_Desktop_1x_v4.jpg";
		} else if ( numeroRandomsss === 2 ) {
			juego["nombre"] = "GTA";
			juego["parrafo"] = "Pig shankle capicola corned beef picanha. Leberkas corned beef kielbasa meatball chislic.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/GTAO_S3/desktop_hero_2xedit.jpg";
		} else if ( numeroRandomsss === 3 ) {
			juego["nombre"] = "Pokemon";
			juego["parrafo"] = "Ham hock meatball turkey, sausage short loin shankle hamburger beef kevin pig pastrami corned beef rump ground round fatback.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/Mobile/PokemonGO/Drop3/PokemonGo_S1Drop3_desktop_hero_1x.jpg";
		} else if ( numeroRandomsss === 4 ) {
			juego["nombre"] = "NBA 2K22";
			juego["parrafo"] = "Get in the game and gear up with two content drops for NBA 2K22, available only for Prime members";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/amped/2k22/NBA2K22_S1Drop1_desktop_hero_2x.jpg";
		} else if ( numeroRandomsss === 5 ) {
			juego["nombre"] = "Rainbow Six Siege";
			juego["parrafo"] = "Porchetta doner rump jowl frankfurter pork belly. Pork belly bresaola turkey capicola shank pork chop corned beef meatball turducken short loin leberkas.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/amped/rss_S05/video_desktop_hero_2._CB1198675309_.mp4";
		} else if ( numeroRandomsss === 6 ) {
			juego["nombre"] = "Lost Ark";
			juego["parrafo"] = "Rump ball tip strip steak tenderloin sirloin prosciutto.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/amped/lol11/heros/drop2_133c7/LoL_S11Drop2_desktop_hero_2x.jpg";
		} else if ( numeroRandomsss === 7 ) {
			juego["nombre"] = "League of Legends";
			juego["parrafo"] = "For a limited time, unlock Prime Gaming Capsules to get RP, mythic essence, skins, and more — available for Prime members.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/amped/lol11/heros/drop2_133c7/LoL_S11Drop2_desktop_hero_2x.jpg";
		} else if ( numeroRandomsss === 8 ) {
			juego["nombre"] = "Call of Duty";
			juego["parrafo"] = "Corned beef hamburger pork loin shankle, pork chop leberkas chicken drumstick pork belly.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/CallOfDutyS03/2022/Drop15/CoD_VAN_Warzone_US_PrimeGaming_S4KeyArt_1440x784_v03._CB635341610_.jpg";
		} else if ( numeroRandomsss === 9 ) {
			juego["nombre"] = "Prime Day";
			juego["parrafo"] = "To celebrate Prime Day, we're giving away 30+ games–for FREE. Start claiming your games now through July 13.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/amped/pd22/PD_PGHQ_Hero_v1EA.mp4";
			juego[ "button" ] = "Start Freeloading";
		} else {
			juego[ "nombre" ] = "ERROR [202206291254]";
			juego[ "parrafo" ] = "uwu";
			juego[ "video" ] = "nadaEmpty";
		}
		
		if ( juego.video.includes( "mp4" ) ) {
			juego[ "video" ] = <video loop muted autoPlay playsInline>
									<source type="video/mp4" src={ juego.video }></source>
								</video>;
		} else {
			juego[ "video" ] = <img src={ juego.video } alt={ juego.nombre } />;
		}
		
		return(
			<section id="slider">
				<div className="bajada">
					<h3>{ juego.nombre }</h3>
					<p>{ juego.parrafo }</p>
					
					<strong>{ this.props.strong }</strong>
					<button>{ juego.button }</button>
				</div>
				<div className="background">
					{ juego.video }
				</div>
				<span className="gradient"></span>
			</section>
		);
	}
}
export default Slider;
