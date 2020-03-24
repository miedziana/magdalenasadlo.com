import React from 'react';
import Avatar from './avatar.png';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class Resume extends React.Component {

	render() {
	    return (

<div className="container content-white">

            <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="row">
                      <img id="maggie-circle" src={Avatar} alt="Maggie..." className="rounded-circle">
                      </img>
                    </div>
                    <div className="row">
				<p><b>Magdalena Sadlo</b></p>
				<p>Software Engineer | Consultant</p>
				<p>
					<a href="https://www.linkedin.com/in/magdalena-sadło-30a16058">
					 	<FontAwesomeIcon icon={faLinkedin} size="lg" />
					</a>
				</p>
			</div>
			<div className="row">
				<Button variant="light" size="sm"><a href="CV_ Magdalena_Sadlo.pdf"  download="CV_ Magdalena_Sadlo.pdf">Download CV</a></Button>
			</div>
                </div> 
                <div className="col-sm-7 content-white">
                </div>
                </div>
                </div>

		<div className="col-sm-5 card-left hidden-md">
			<div className="row avatar-placeholder">
				<img src={Avatar} className="rounded-circle"/>
			</div>
			<div className="row">
				<p><b>Magdalena Sadlo</b></p>
				<p>Software Engineer | Consultant</p>
				<p>
					<a href="https://www.linkedin.com/in/magdalena-sadło-30a16058">
					 	<FontAwesomeIcon icon={faLinkedin} size="lg" />
					</a>
				</p>
			</div>
			<div className="row">
				<Button variant="light"><a href="CV_ Magdalena_Sadlo.pdf"  download="CV_ Magdalena_Sadlo.pdf">Download Resume</a></Button>
			</div>
		</div>

		<Card className="col-sm-5">
			<Card.Img variant="top" src={Avatar} className="rounded-circle"/>
			<Card.Body>
			<Card.Title>Magdalena Sadlo</Card.Title>
			<Card.Text>
			<p>Software Engineer | Consultant</p>
			<p>
				<a href="https://www.linkedin.com/in/magdalena-sadło-30a16058">
				 	<FontAwesomeIcon icon={faLinkedin} size="lg" />
				</a>
			</p>
			</Card.Text>
				<Button variant="light"><a href="CV_ Magdalena_Sadlo.pdf"  download="CV_ Magdalena_Sadlo.pdf">Download Resume</a></Button>
			</Card.Body>
		</Card>
	</div>


	    	)
	}
}

export default Resume;