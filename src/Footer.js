import React, { Component } from 'react';

import './css/Footer.css';

import amazon from './images/amazon.png';
import amazongaming from './images/amazongaming.png';

class Footer extends Component {
	render() {
		return (
				<React.Fragment>
					<section className="backToTop">
						<p>Back to top</p>
					</section>
					<footer>
						<div>
							<a href="https://gaming.amazon.com/" target="_blank" rel="noreferrer">
								<img src={ amazongaming } alt="Amazon Gaming" />
							</a>
						</div>
						<div>
							<p>{this.props.tezto}</p>
						</div>
						<div>
							<a href="https://amazon.com/" target="_blank" rel="noreferrer">
								<img src={ amazon } alt="Amazon.com" />
							</a>
						</div>
					</footer>
				</React.Fragment>
		);
	}
};
	
export default Footer;
