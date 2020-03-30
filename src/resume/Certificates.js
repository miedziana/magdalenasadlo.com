import React from 'react';

import Card from 'react-bootstrap/Card';
import './Certificates.css';

class Certificates extends React.Component {
	render() {
		return (
			<div>
				<h2>certificates</h2>
				<br/>
				<div className="row">
				<div className="col-sm-6">
					<Card className="shaded certificate">
						<Card.Body>
						<Card.Title>Professional Scrum Master I</Card.Title>
						<Card.Subtitle>Scrum.org</Card.Subtitle>
						<Card.Text>
							February 2017
						</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div className="col-sm-6">
					<Card className="shaded certificate">
						<Card.Body>
						<Card.Title>Professional Scrum Developer I</Card.Title>
						<Card.Subtitle>Scrum.org</Card.Subtitle>
						<Card.Text>
							September 2016
						</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div className="col-sm-6">
					<Card className="shaded certificate">
						<Card.Body>
						<Card.Title>Oracle Certified Professional, Java SE 6 Programmer</Card.Title>
						<Card.Subtitle>Oracle</Card.Subtitle>
						<Card.Text>
							June 2013
						</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div className="col-sm-6">
					<Card className="shaded certificate">
						<Card.Body>
						<Card.Title>Certificate in Advanced English, C1</Card.Title>
						<Card.Subtitle>Cambridge English Language Assessment</Card.Subtitle>
						<Card.Text>
						September 2006
						</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div className="col-sm-6">
					<Card className="shaded certificate">
						<Card.Body>
						<Card.Title>Goethe Zertifikat (German), B2</Card.Title>
						<Card.Subtitle>Goethe Institut</Card.Subtitle>
						<Card.Text>
							May 2011
						</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div className="col-sm-6">
					<Card className="shaded certificate">
						<Card.Body>
						<Card.Title>Diplôme d'études en langue française (DELF), B2</Card.Title>
						<Card.Subtitle>CIEP</Card.Subtitle>
						<Card.Text>
							November 2015
						</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div className="col-sm-6">
					<Card className="shaded certificate">
						<Card.Body>
						<Card.Title>Machine Leaerning</Card.Title>
						<Card.Subtitle>Coursera.org</Card.Subtitle>
						<Card.Text>
							August 2013
						</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div className="col-sm-6">
					<Card className="shaded certificate">
						<Card.Body>
						<Card.Title>Social and Economic Networks: Models and Analysis</Card.Title>
						<Card.Subtitle>Coursera.org</Card.Subtitle>
						<Card.Text>
							June 2013
						</Card.Text>
						</Card.Body>
					</Card>
				</div>
				</div>

			</div>
		)
	}
}

export default Certificates