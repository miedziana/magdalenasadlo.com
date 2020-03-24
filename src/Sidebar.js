import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import $ from 'jquery';
import bCloud from './blog-cloud.svg';
import dCloud from './demo-cloud.svg';
import cCloud from './cv-cloud.svg';
import oCloud from './other-cloud.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Link
} from 'react-router-dom';



class Sidebar extends React.Component{


	render() {

	const handleClick = () => {
		        $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
	};


	return (


		    <Navbar id="sidebar">
	            <div id="dismiss" onClick={handleClick}>
	                <FontAwesomeIcon icon={faTimesCircle} size="lg" />
	            </div>

	            <Nav className="flex-column">

					<Nav.Link as={Link} to="/">Home</Nav.Link>
					<Nav.Link as={Link} to="resume">Resume</Nav.Link>
					<Nav.Link as={Link} to="projects">Projects</Nav.Link>
					<Nav.Link as={Link} to="art">Art</Nav.Link>
					<Nav.Link as={Link} to="thoughts">Thoughts</Nav.Link>
					<Nav.Link as={Link} to="contact">Contact</Nav.Link>

	            </Nav>
	    	</Navbar>


        );}
	}

export default Sidebar;

