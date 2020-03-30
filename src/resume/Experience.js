import React from 'react';

import './Experience.css';

class Experience extends React.Component {
	render() {
		return (
			<div>
   <h2 class="title-lg text-upper padd-box">work experience</h2>

    <div class="education">

        <div class="education-box">
            <time class="education-date" datetime="2019-01T2019-06">
                <span>Jan <strong class="text-upper">2019</strong> - June <strong>2019</strong></span>
            </time>
            <h3>Backend Developer/Contractor</h3>

            <span class="education-company">Bank Vontobel, Zurich, Switzerland</span>

            <p>
                I was part of the team responsible for communication between different applications in the bank currently
                done overwhelmingly using JMS technology. My role was partly to develop proof of concept for migrating the infrastructure
                deployed on the physical servers to the container based one using Docker and Openshift platform, and partly to support the team
                (which had mostly operational/infrastructure background) with my Java expertise in improvements to their existing applications.
            </p>
            <p>
                Technologies: Java, Hibernate, Spring Boot, REST, Microservices, Docker, Openshift
            </p>
        </div>

        <div class="education-box">
            <time class="education-date" datetime="2018-08T2018-12">
                <span>August <strong class="text-upper">2018</strong> - Dec <strong>2018</strong></span>
            </time>
            <h3>Backend Developer/Contractor</h3>

            <span class="education-company">Julius Bar, Zurich, Switzerland</span>

            <p>
                The project was a continuation of a project I was in still as part of a Zuhlke team. The application is an internal tool to be used as
                a framework for tasks workflow for client relationship managers to manage tasks coming from different platforms. The goal of this phase of the project was to prepare the application interfaces to receive tasks directly from other applications via JMS. The development team was consisting of two people, and I was responsible for everything related to the backend, including the database.
            </p>
            <p>
                Technologies: Java, Hibernate, REST, JBoss, Oracle DB, Maven, Selenium, JUnit, EdgeConnect (frontend)
            </p>
        </div>

        <div class="education-box">
            <time class="education-date" datetime="2018-01T2018-07">
                <span>Feb <strong class="text-upper">2018</strong> - Jul <strong>2018</strong></span>
            </time>
            <h3>Frontend Developer/Contractor</h3>

            <span class="education-company">ZKB, Zurich, Switzerland</span>

            <p>Development and maintenance of different parts of an online banking platform, as well as an internal platform for client advisors. 
            In this project I was mostly responsible for the frontend development using AngularJS and JSP (which by its nature required working with Java). We 
            also did a proof of concept to embed new functionality in the online banking platform using Angular.</p>
            <p>
                Technologies: AngularJS, Angular, JSP, HTML5, CSS, Java
            </p>
        </div>


        <div class="education-box">
            <time class="education-date" datetime="2016-04T2018-02">
                <span>April <strong class="text-upper">2016</strong> - Feb <strong>2018</strong></span>
            </time>
            <h3>Full Stack Developer/Consultant</h3>

            <span class="education-company">Zuhlke Engineering AG, Schlieren, Zurich Area, Switzerland</span>

            <p>I worked as a software engineering consultant for companies from the financial sector. My responsibilities involved design, full stack web development, testing, code reviews, guidance in application of agile methodologies (Scrum). </p>
            <p><b>PROJECTS</b></p> 
            <p>Julius Bär – an internal web application for task workflow management for relationship managers.</p>
            <p>Technologies: Java EE, Hibernate, JBoss, Maven, JavaScript, HTML, Selenium, EdgeConnect, Oracle DB </p>
            <p>SIX – frontend web development and microservices infrastructure setup for the new TPA platform </p>
            <p>Technologies: Java, Spring Boot, Maven, Angular, npm, Selenium, Docker, OpenShift, Oracle DB</p>
        </div>

        <div class="education-box">
            <time class="education-date" datetime="2018-01T2018-07">
                <span>Mar <strong class="text-upper">2014</strong> - Feb <strong>2016</strong></span>
            </time>
            <h3>Full Stack Developer</h3>

            <span class="education-company">Swissquote, Gland, Geneva Area, Switzerland</span>

            <p>Full stack development and maintenance of an ePrivate Banking - a Java-based robo-advisor platform. I also had an opportunity to be a technical lead for one of the offshore teams which included code reviews, business clarifications and technical guidance.</p>
            <p>
                Technologies: Java, Hibernate, Oracle DB, Resin server, Flex, ActionScript, Javascript, HTML5, CSS
            </p>
        </div>

        <div class="education-box">
            <time class="education-date" datetime="2018-01T2018-07">
                <span>Sep <strong class="text-upper">2012</strong> - Feb <strong>2014</strong></span>
            </time>
            <h3>Java Developer</h3>

            <span class="education-company">Krakow, Poland</span>

            <p>Development, maintenance and preparation of new releases of software for the authentication of radios in the infrastructure (Java based application with Swing GUI), participation in system testing both on the product level as well as the system integration tests.</p>
            <p>
                Technologies: Java, Maven, Ant, JUnit, PostgreSQL, Python, InstallShield, WiX, VBS and Batch scripts, ClearCase, Jenkins
            </p>
        </div>

    </div>
    </div>
		)
	}
}

export default Experience