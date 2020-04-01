import React from 'react';
import {
  Link,
  HashRouter
} from 'react-router-dom';

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
					<Link to="/choice">... On Freedom of Choice</Link>
				</div>				
				<div className="row">
					<Link to="feminism">... On Feminism</Link>
				</div>

            </HashRouter>
            </div>
		);
	}
	
}

export default Thoughts;