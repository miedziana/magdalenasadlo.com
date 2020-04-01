import React from 'react';
import ProgressBullet from './ProgressBullet';
import './ProgressBullets.css'

class ProgressBullets extends React.Component {

	render () {
		let bullets = [];
			for (let i = 0; i < this.props.bulletsFilled; i++) {
				bullets.push(<ProgressBullet filled={true}></ProgressBullet>);
				}
			for (let i = 0; i < (this.props.bulletsCount -this.props.bulletsFilled); i++) {
				bullets.push(<ProgressBullet filled={false}></ProgressBullet>);
			}
		return (
		<div>
			<div className="row">{this.props.title}</div>
			<div className="row progress-animated">
				{bullets} {this.props.level}
			</div>
		</div>
		)
	}


}



export default ProgressBullets;