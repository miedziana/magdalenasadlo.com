import React from 'react';
import Avatar from './avatar.png';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBullets from './components/ProgressBullets';

class Resume extends React.Component {

	render() {
	    return (
	    	<div className="container">
	    	<div className="row">
	    		<div className="col-sm-4">
				<Card>
					<Card.Img variant="top" src={Avatar} className="rounded-circle"/>
					<Card.Body>
					<Card.Title>Magdalena Sadlo</Card.Title>
					<Card.Text>
					Software Engineer | Consultant <a href="https://www.linkedin.com/in/magdalena-sadło-30a16058">
						 	<FontAwesomeIcon icon={faLinkedin} size="lg" />
						</a>
					</Card.Text>
						<Button variant="light"><a href="CV_ Magdalena_Sadlo.pdf"  download="CV_ Magdalena_Sadlo.pdf">Download Resume</a></Button>
					</Card.Body>
				</Card>
				</div>

				<div className="col-sm-6 content-white">
	<section>
    <div className="row">

    <div className="col">
            <h2>languages</h2>

                 <ProgressBullets bulletsFilled="5" bulletsCount="5" title="Polish" level="mother tongue"></ProgressBullets>
                 <ProgressBullets bulletsFilled="5" bulletsCount="5" title="English" level="proficient"></ProgressBullets>
                 <ProgressBullets bulletsFilled="5" bulletsCount="5" title="German" level="proficient"></ProgressBullets>
                 <ProgressBullets bulletsFilled="3" bulletsCount="5" title="French" level="intermediate"></ProgressBullets>
                 <ProgressBullets bulletsFilled="1" bulletsCount="5" title="Russian" level="beginner"></ProgressBullets>

        </div>
    </div>
</section>


</div>
	    		</div>



	</div>



	    	)
	}
}

export default Resume;