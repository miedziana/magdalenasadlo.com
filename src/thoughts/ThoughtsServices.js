import React from 'react';

import {
  Link,
  HashRouter
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class ThoughtsPublicServices extends React.Component {

	render() {
	    return (
	    	<div className="container content-white">
	    	<HashRouter>
	    	<Link to="../thoughts"><Button variant="link"><FontAwesomeIcon icon={faArrowLeft} /> Thoughts</Button></Link>
	    	<div className="offset-1 row">
	    	<h4>Public Services</h4>
		    	<p>
		    	Many people, especially in countries heavily indoctrinated by capitalism, see anything owned by the state and financed from taxes as
		    	an inefficient and therefore support private ownership of pretty much anything. It makes some sense when we talk about delivering a 
		    	product that has to respond to individual needs, like a computer or a kettle (although seeing how many kettles are available to choose from
		    	make me doubt that this is human energy well spent to have hundreds or thousands of varietie of a device that basically boils water...). But
		    	can we apply the same logic when we talk about public utilities or services - healthcare, public transport, electricity? 
		    	</p>
		    	<p>
		    	I believe not. The answer to that is very simple, it is economics 101, namely the goal of a private enterprise. And the goal of a private
		    	enterprise is to maximise the profit for the shareholders - not to sell the best product possible, not to make sure everyone can get that
		    	product. A public utility cannot be run for profit, as its sole reason for existence is to provide a service for public good. It does not 
		    	mean that it can always be free, or even that it has to be funded from the taxes (although this is probably a reasonable way to do it). 
		    	The profit incentive cannot exist in health care, pharmaceutical industry, insurance, public transport, police, military, electricity and 
		    	water supply, internet connectivity, infrastructure (including virtual ones). It cannot exist in any branch of industry that serves a 
		    	purpose of keeping the society in tact.
		    	</p>
		    	<p>
				Why is it, you ask? I see two main reasons for that: the profit incentive and room for competition. Profit incentive is the foundation 
				of operation of any private company that finance students learn first thing at the university: the goal of a private enterprise is to 
				maximise profit to the shareholders. That’s pretty much it. How can you make more money selling your product (especially when there is 
				only one kind of product to sell)? You make more money when more people use your service or when you find a way to charge people more 
				money for using it. For a consumer, it means that he can save money by using the service less. Let’s see what it means for health care, 
				where one always hopes that demand is actually low. The company has incentives to make more people use a health care service. How 
				do you do that? Well, either you need more people getting sick (or not preventing them from getting sick) or performing procedures they 
				actually do not need. If you look at preventable conditions like obesity, a publicly run service has all incentives to prevent it, as it 
				results in costly health care (and in extreme cases can make people unable to work, which on the other hand costs the state money to 
				support that person). However, for privately run health care system, obesity epidemic is a dream come true and you have no reason to give 
				the only advice needed (which is to eat healthy food in reasonable quantities and exercise). From a patient’s perspective, if I need 
				medical check-up, I should not have an incentive to skip it to save money - if it is needed to go to a gynaecologist once every six months 
				just to see if everything is fine, a person who has “cashflow problem” (as some politicians call poverty) is very likely to skip that visit 
				and therefore die from a cancer that was otherwise curable. 
		    	</p>
		    	<p>
		    	It is argued that competition brings the prices down and efficiency up, but in reality if you have domains like healthcare or pharmaceutical 
		    	industry, the competition is very limited and the entry barrier to high, and the players understand that real competitions is no good for any
		    	of them. When you look at public transport, it is very difficult to imagine how selling parts of it to private companies can make benefits for
		    	the public, as it makes it virtually impossible to create services that are mutually supplementary and e.g. create one monthly pass that includes
		    	all of them. Not even to mention that if you run it for profit, first thing you do is to reduce or cancel services that are less used by 
		    	commuters, like local buses running to small villages therefore create a service that does not cater for people who might actually need it more. In 
		    	my opinion that is one of the main reasons why private companies outperform, in terms of quality of service and profits, the public ones - when you operate
		    	truely for the public good you need to maintain services that are needed, even if they bring losses.
		    	</p>
		    	<p>
		    	Sadly, in most EU countries now there is no proper funding to those services, therefore making it very hard to provide the quality of service 
		    	needed and making arguing in favour of them that much more difficult.
		    	</p>
	    	</div>
            </HashRouter>
            </div>
	    	);
	}
}

export default ThoughtsPublicServices;