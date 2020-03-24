import React from 'react';
import {
  Link,
  Switch, 
  Route,
  HashRouter
} from 'react-router-dom';
import ThoughtsFeminism from './thoughts/ThoughtsFeminism'
import ThoughtsDisruption from './thoughts/ThoughtsDisruption'

class Thoughts extends React.Component {

	render() {
		return (

			<div className="container content-white">

			<HashRouter>

			<div className="row">
					<Link to="disruption">... On Disruption</Link>
				</div>
				<div className="row">
					<Link to="/">... On Technology</Link>
				</div>
				<div className="row">
					<Link to="/">... On Public Services</Link>
				</div>
				<div className="row">
					<Link to="/">... On Free Markets</Link>
				</div>
				<div className="row">
					<Link to="/thoughts/femnism">... On Feminism</Link>
				</div>

            </HashRouter>
            </div>
		);
	}
	
}

export default Thoughts;