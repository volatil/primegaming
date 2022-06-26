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
						<img src={ amazongaming } alt="Amazon Gaming" />
						<p>{this.props.tezto}</p>
						<img src={ amazon } alt="Amazon.com" />
					</footer>
				</React.Fragment>
		);
	}
};
	
export default Footer;
