import React from 'react';

import {
  Link,
  HashRouter
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class ThoughtsCapitalism extends React.Component {

	render() {
	    return (
	    	<div className="container content-white">
	    	<HashRouter>
	    	<Link to="../thoughts"><Button variant="link"><FontAwesomeIcon icon={faArrowLeft} /> Thoughts</Button></Link>
	    	<div className="offset-1 row">
		    	<h4>Free Markets</h4>
		    	<p>
		    	If the capitalism encourages entrepreneurialism, how come that it is not Great Britain and United States thriving with local crafts, independent 
		    	cafes and businesses, but rather are dominated by big food chains and corporations? In order to be creative, you have to be 
		    	confident that even if you fail, you will bounce back. You need to have your basic needs satisfied and you need your body to be healthy. You
		    	need some basic safety nets and higher education system that will not enslave you with huge debt than you then pay off by settling
		    	for any job that will bring you most money.
 		    	</p>
	    	</div>
            </HashRouter>
            </div>
	    	);
	}
}

export default ThoughtsCapitalism;