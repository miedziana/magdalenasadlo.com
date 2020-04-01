import React from 'react';
import './Projects.css';

class Projects extends React.Component {
	render() {
		return (
			<div className="container content-white">
				<div className="row">
					<h2>projects</h2>
				</div>
				<div className="row">
					<h4><a href="magdalenasadlo.com">This website</a></h4>
					<p>The purpose of this website is to be a self-contained showcase of my works, skillset and portfolio. It is 
					a space where I can present myself in a more creative way than simply on Linkedin, but also where I can 
					experiment with technologies and learn new things. Originally built as a plain as a static website, now 
					rebuilt using React.js, and deployed using <a href="sitejs.org"><b><u>Site.js</u></b></a>. It is a living proof that I 
					can built a website. If you want to take a look at the code, you can find it 
					on <a href="https://github.com/miedziana/magdalenasadlo.com"><b><u>Github</u></b></a></p>
				</div>
				<div className="row">
					<h4><a href="https://maggielard.com">Maggie Lard blog</a></h4>
					<p>Travel diaries from my travels with my boyfriend. It is a collection of stories, sketches and soundbites 
					from our trip. It was meant as a way to preserve the memories from the trip while still fresh and share the 
					trip with our families and friends. The blog is built using <a href="tryghost.com"><b><u>Ghost</u></b></a>.</p>
				</div>
				<div className="row">
					<h4>Next project</h4>
					<p>Next project is currently in my head only. It might materialize itself very soon if the coronavirus emergency
					lasts much longer.</p>
				</div>
			</div>
		)
	}
}

export default Projects