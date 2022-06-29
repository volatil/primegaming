import React, { Component } from 'react';
// import $ from 'jquery';

// import logo_primegaming from '../images/amazongaming.png';
import '../css/Slider.css';

class Slider extends Component {
	  
	render(){
		var juego = {
			nombre: this.props.juego ,
			parrafo: this.props.parrafo ,
			video : "" ,
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
			juego["nombre"] = "World of Warcraft";
			juego["parrafo"] = "Pig meatloaf alcatra, picanha ground round cow strip steak tongue chislic pancetta tri-tip sirloin.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/WorldofWarcraft/S01/desktop_hero_1x_gradient._CB1198675309_.jpg";
		} else if ( numeroRandomsss === 5 ) {
			juego["nombre"] = "Rainbow Six Siege";
			juego["parrafo"] = "Porchetta doner rump jowl frankfurter pork belly. Pork belly bresaola turkey capicola shank pork chop corned beef meatball turducken short loin leberkas.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/amped/rss_S05/video_desktop_hero_2._CB1198675309_.mp4";
		} else if ( numeroRandomsss === 6 ) {
			juego["nombre"] = "Lost Ark";
			juego["parrafo"] = "Rump ball tip strip steak tenderloin sirloin prosciutto.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/SM/Amped/lostark/drop1/LA_D1_desktop_hero_2x.jpg";
		} else if ( numeroRandomsss === 7 ) {
			juego["nombre"] = "Destiny 2";
			juego["parrafo"] = "Fatback landjaeger rump ribeye. Turducken pork chop ham tongue. Chicken chuck jerky, capicola frankfurter tongue meatloaf ball tip.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/amped/destiny2/S03/Drop6/d2_s17_Prime-Gaming_ODP_Desktop_1x.jpg";
		} else if ( numeroRandomsss === 8 ) {
			juego["nombre"] = "Call of Duty";
			juego["parrafo"] = "Corned beef hamburger pork loin shankle, pork chop leberkas chicken drumstick pork belly.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/CallOfDutyS03/2022/Drop15/CoD_VAN_Warzone_US_PrimeGaming_S4KeyArt_1440x784_v03._CB635341610_.jpg";
		} else if ( numeroRandomsss === 9 ) {
			juego["nombre"] = "Road Trip";
			juego["parrafo"] = "Ribeye burgdoggen andouille, chuck meatloaf pastrami kielbasa pig sirloin pork loin sausage alcatra prosciutto landjaeger jowl.";
			juego[ "video" ] = "https://m.media-amazon.com/images/G/01/sm/LegacyGames/RoadTrip/Road_Trip_Desktop_1x_v2.jpg";
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
					<button>{ this.props.button }</button>
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
