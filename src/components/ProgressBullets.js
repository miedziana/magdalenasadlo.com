import React from 'react';
import ProgressBullet from './ProgressBullet';
import './ProgressBullets.css'

class ProgressBullets extends React.Component {

	state = {
		bullets: []
	};


	constructor(props) {
		super(props)
		for (let i = 0; i < this.props.bulletsFilled; i++) {
				this.state.bullets.push(<ProgressBullet filled={true}></ProgressBullet>);
			}
		for (let i = 0; i < (this.props.bulletsCount -this.props.bulletsFilled); i++) {
			this.state.bullets.push(<ProgressBullet filled={false}></ProgressBullet>);
		}
		console.log(this.state.bullets);
	}
	
	render () {
		return (
		<div>
			<div className="row">{this.props.title}</div>
			<div className="row progress-animated">
				{this.state.bullets} {this.props.level}
			</div>
		</div>
		)
	}


}



export default ProgressBullets;