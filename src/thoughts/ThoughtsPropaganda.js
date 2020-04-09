import React from 'react';

import {
  Link,
  HashRouter
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class ThoughtsTechnology extends React.Component {

	render() {
	    return (
	    	<div className="container content-white">
	    	<HashRouter>
	    	<Link to="../thoughts"><Button variant="link"><FontAwesomeIcon icon={faArrowLeft} /> Thoughts</Button></Link>
	    	<div className="offset-1 row">
	    	<h4>Misinformation</h4>
	    	<p>
	    	One of the reason I think we live in dangerous times is because of the personalised news. People pretty much follow the media 
	    	whose presentation of reality most matches their own. It is a perfect environment for the propaganda and misinformation to flurish. It
	    	becomes harder and harder to change people's opinion as you don't even know what have they read and where. You have no idea if you are 
	    	trying to debunk myths or half-truths they read on some obscure blog, or you are both quoting equally reliable sources.  
	    	</p>
	    	<p>
	    	Following more left-wing or liberal media gives me an impression is that what they are often trying to do is immitate the way right-wing
	    	propaganda works and create "content" intended to go viral - short clips or stories in their own alternative reality, that nobody who 
	    	already does not agree with them would ever read. 
	    	</p>
	    	<p>
	    	In my opinion this approach cannot and will not ever work. The viral content spreads in a very simmilar manner like a virus - it affects
	    	mostly people whose whose immune system is not able to fight it off, and it spreads through a medium that allows easy spread of it. In the
	    	case of misinformation and propaganda it plays on our fears and on things we already know because of what we were taught (and what we were 
	    	taught naturally is in line with the dominating ideology). Therefore you cannot really plant any new ideas in the same fashion.
	    	</p>
	    	<p>
	    	What can be done then, if you want to promote a different world view that is incompatible with capitalism, especially in its current form?
	    	If we see misinformation as a virus then what we need is not a different kind of virus but rather a vaccine that will boost our immune system. 
	    	And when we talk about understanding of information and intentions behind that information our best vaccine is education. Only when our 
	    	brains are trained to read and think for ourselves we can hope to understand what is in our best interest and who might be trying to steer us against
	    	acting it.
	    	</p>
	    	</div>
            </HashRouter>
            </div>
	    	);
	}
}

export default ThoughtsTechnology;