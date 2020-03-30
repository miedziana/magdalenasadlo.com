import React from 'react';
import Avatar from './avatar.png';
import './Resume.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faIdBadge, faAward, faUserGraduate, faBriefcase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Intro from './resume/Intro';
import Skills from './resume/Skills';
import Experience from './resume/Experience';
import Education from './resume/Education';
import Certificates from './resume/Certificates';

class Resume extends React.Component {

	render() {
	    return (
	    	<div>
	    	<div className="container d-none d-lg-block">
		    	<div className="row">
		    		<div className="col-sm-3">
						<Card className="shaded">
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

					<div className="col-sm-9">
						<Tab.Container id="left-tabs-example" defaultActiveKey="intro">
						  <Row>
						  	<Col sm={11} className="content-white">
						      <Tab.Content>
						        <Tab.Pane eventKey="intro">
						        	<Intro/>
						        </Tab.Pane>
						        <Tab.Pane eventKey="skills">
						          	<Skills/>
						        </Tab.Pane>
						        <Tab.Pane eventKey="experience">
						          	<Experience/>
						        </Tab.Pane>
						        <Tab.Pane eventKey="education">
						          	<Education/>
						        </Tab.Pane>
						        <Tab.Pane eventKey="certificates">
						          	<Certificates/>
						        </Tab.Pane>					  					        
						      </Tab.Content>
						    </Col>
						    <div>
						      <Nav variant="pills" className="flex-column d-none d-lg-block">
						      	<Nav.Item>
						          <Nav.Link eventKey="intro"><FontAwesomeIcon icon={faIdBadge} size="lg"/></Nav.Link>
						        </Nav.Item>
						        <Nav.Item>
						          <Nav.Link eventKey="skills"><FontAwesomeIcon icon={faLaptopCode} size="lg"/></Nav.Link>
						        </Nav.Item>
						        <Nav.Item>
						          <Nav.Link eventKey="experience"><FontAwesomeIcon icon={faBriefcase} size="lg"/></Nav.Link>
						        </Nav.Item>
						        <Nav.Item>
						          <Nav.Link eventKey="education"><FontAwesomeIcon icon={faUserGraduate} size="lg"/></Nav.Link>
						        </Nav.Item>
						        <Nav.Item>
						          <Nav.Link eventKey="certificates"><FontAwesomeIcon icon={faAward} size="lg"/></Nav.Link>
						        </Nav.Item>
						      </Nav>
						    </div>
						  </Row>
						</Tab.Container>
					</div>
		    	</div>
		    </div>
		    <div className="content-white d-lg-none d-md-block">
	    		<Row className="center">
	    			<Col>
						<img src={Avatar} className="rounded-circle" width="50%"/>
						<h2>Magdalena Sadlo</h2>
						<div>
						Software Engineer | Consultant 
						</div>
						<div>
						<a href="https://www.linkedin.com/in/magdalena-sadło-30a16058">
							 	<FontAwesomeIcon icon={faLinkedin} size="lg" />
						</a>
						</div>
						<Button variant="light">
							<a href="CV_ Magdalena_Sadlo.pdf"  download="CV_ Magdalena_Sadlo.pdf">Download Resume</a>
						</Button>
					</Col>
				</Row>
				<Tab.Container className="content-white" id="left-tabs-example" defaultActiveKey="intro">
						<Nav variant="pills justify-content-center">
					      	<Nav.Item className="col">
					          <Nav.Link eventKey="intro"><FontAwesomeIcon icon={faIdBadge} size="lg"/></Nav.Link>
					        </Nav.Item>
					        <Nav.Item className="col">
					          <Nav.Link eventKey="skills"><FontAwesomeIcon icon={faLaptopCode} size="lg"/></Nav.Link>
					        </Nav.Item>
					        <Nav.Item className="col">
					          <Nav.Link eventKey="experience"><FontAwesomeIcon icon={faBriefcase} size="lg"/></Nav.Link>
					        </Nav.Item>
					        <Nav.Item className="col">
					          <Nav.Link eventKey="education"><FontAwesomeIcon icon={faUserGraduate} size="lg"/></Nav.Link>
					        </Nav.Item>
					        <Nav.Item className="col">
					          <Nav.Link eventKey="certificates"><FontAwesomeIcon icon={faAward} size="lg"/></Nav.Link>
					        </Nav.Item>
						 </Nav>
				
				 	<Row className="content-white">
				      <Tab.Content>
				        <Tab.Pane eventKey="intro">
				        	<Intro/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="skills">
				          	<Skills/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="experience">
				          	<Experience/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="education">
				          	<Education/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="certificates">
				          	<Certificates/>
				        </Tab.Pane>					  					        
				      </Tab.Content>
				    </Row>
				</Tab.Container>
		    	</div>
			</div>



	    	)
	}
}

export default Resume;