import React from 'react';

import {
  Link,
  HashRouter
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class ThoughtsDisruption extends React.Component {

	render() {
	    return (
	    	<div className="container content-white">
	    	<HashRouter>
	    	<Link to="../thoughts"><Button variant="link"><FontAwesomeIcon icon={faArrowLeft} /> Thoughts</Button></Link>
	    	<div className="row">
	    	<h4>Disruption</h4>
	    	<p>
			The term 'disruption' somehow gained a very positive connotation in the tech slang - without question companies like Facebook,
			Airbnb, Uber, Amazon and many others are disruptors. But what exactly are they disrupting? It seems more and more that what they disrupt
			is society. They disrupt the way we live and communicate. They extract money from our pockets.
	    	</p>
	    	</div>
            </HashRouter>
            </div>
	    	);
	}
}

export default ThoughtsDisruption;