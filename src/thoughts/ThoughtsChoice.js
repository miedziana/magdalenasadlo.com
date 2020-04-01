import React from 'react';

import {
  Link,
  HashRouter
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './Thoughts.css';

class ThoughtsChoice extends React.Component {

	render() {
	    return (
	    	<div className="container content-white">
	    	<HashRouter>
	    	<Link to="../thoughts"><Button variant="link"><FontAwesomeIcon icon={faArrowLeft} /> Thoughts</Button></Link>
	    	<div className="offset-1 row">
	    	<br/>
	    	<h4>Freedom of Choice</h4>
	    	<p>
			We like to think of ourselves as independent beings that make decisions freely. We are living in an economic system that is built on 
			this presumption - you are free individual that is solely responsible for making the right choices for yourself and it is only you 
			that is to blame when you fail to do so. 
			</p>
			<p>
			But it is consistently confirmed by science that it is not that simple. The scientific research suggests that decisions might be taken 
			already in <a target="_blank"  rel="noopener noreferrer" href="https://www.nature.com/articles/news.2008.751">our subconsciousness before we are even aware we already made them</a>. 
			Looking at how magicians (or “magicians”, if you prefer) like <a target="_blank"  rel="noopener noreferrer" href="https://www.youtube.com/watch?v=YQXe1CokWqQ">Darren Brown can 
			plant suggestions in his audience’s heads</a> is entertaining, but it also should make us scared. Everyday we are bombarded by messages 
			directed to our subconsciousness based on our fears, aspirations and prejudices. Not only our lifestyle choices and the way we spend our 
			oney is being manipulated, but also our political choices and with the rise of the surveillance capitalism, the companies have more and 
			more insight on what the triggers are for each and everyone of us. And no wonder that we cannot escape, if even people who built those 
			platforms that we now rely on for communication admit that they were meant to be addictive and they use the same tricks as the gambling 
			industry (<a target="_blank"  rel="noopener noreferrer" href="https://www.nytimes.com/2019/10/06/technology/phone-screen-addiction-tech-nir-eyal.html">this</a> and <a target="_blank"  rel="noopener noreferrer" href="https://www.youtube.com/watch?v=X6lEkO6NRAM">this</a>).
			</p>
			<p>
			Knowing all this, how can we still follow the premises of capitalism, that is built upon understanding of freedom that is outdated and 
			debunked by science. We must acknowledge that we can be manipulated, we can be tricked and we are essentially not free to choose what 
			we truly want. The incentives matter, and the people who incentivise us on daily bases should not be advertisers that exploit our 
			vulnerabilities.
			</p>
			<p>
			I sometimes wonder, what would I be if I was left just to observe my family and peers? What toys would I have wanted for Christmas as 
			a little girl if I didn’t just want that thing I saw repeatedly on tv between the cartoons I was watching? What shoes would I buy if I 
			didn’t know what is currently in fashion? Would it even matter?
			</p>
			<p>
			With the rise of personalised persuasion, it hardly really matters what your tastes are - the advertisers market their products or services
			to people who just need a little push to buy certain thing or to vote a certain way. Facebook will not show you Nike ads if you don’t like 
			sport shoes, it is a waste of time. In the end the goal is to sell as much stuff to all kind of people who might want to buy it - just 
			increase overall money spent on pointless stuff by people who have limited resources and might otherwise do something that is actually 
			good for them - buy a house, take a break from work, get out of debt, or even just not get into even more debt.
	    	</p>
	    	</div>
            </HashRouter>
            </div>
	    	);
	}
}

export default ThoughtsChoice;