import React, { Component } from 'react';
import $ from 'jquery';

import '../css/Footer.css';

import amazon from '../images/amazon.png';
import amazongaming from '../images/amazongaming.png';

class Footer extends Component {

	clickTest = () => {
			console.log( `click LOGO` );
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
	}
	
	render() {
		return (
				<footer>
					<section onClick={this.clickTest} className="backToTop">
						<p>Back to top</p>
					</section>
					<div>
						<div className="logo">
							<a href="https://gaming.amazon.com/" target="_blank" rel="noreferrer">
								<img src={ amazongaming } alt="Amazon Gaming" />
							</a>
						</div>
						<div className="texto">
							<div>
								<span className="rayita"></span>
								<p>Follow @PrimeGaming</p>
								<p>©1996-2022, Amazon.com, Inc. or its affiliates</p>
								<ul>
									<li>
										<a href="https://www.amazon.com/gp/help/customer/display.html" title="Conditions of Use">Conditions of Use</a>
									</li>
									<li>
										<a href="https://www.amazon.com/gp/help/customer/display.html" title="Privacy Notice">Privacy Notice</a>
									</li>
									<li>
										<a href="https://www.amazongames.com/en-us/support/prime-gaming" title="Prime Gaming Guide">Prime Gaming Guide</a>
									</li>
									<li>
										<a href="https://gaming.amazon.com/cookie-notice?returnUri=%2Fhome" title="Cookie Notice">Cookie Notice</a>
									</li>
									<li>
										<a href="https://www.amazon.com/gp/help/customer/display.html" title="Interest-Based Ads">Interest-Based Ads</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="logo">
							<a href="https://amazon.com/" target="_blank" rel="noreferrer">
								<img src={ amazon } alt="Amazon.com" />
							</a>
						</div>
					</div>
				</footer>
		);
	}
};
	
export default Footer;
