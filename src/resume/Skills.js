import React from 'react';
import './Skills.scss'

import ProgressBar from 'react-bootstrap/ProgressBar';
import ProgressBullets from '../components/ProgressBullets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLock, faSnowboarding, faHiking, faYinYang, faPencilAlt} from "@fortawesome/free-solid-svg-icons";

class Skills extends React.Component {
	render() {
		return (
				<div>	
					<h2>skills</h2>		

				    <div className="row">
						<div className="col-sm-5 brd-btm">
							<h5>professional skills</h5>
							<div className="center">
							  <div className="pie" data-value="90">backend</div>
							  <div className="pie" data-value="80">frontend</div>
							  <div className="pie" data-value="70">infrastructure</div>		
							</div>				  
				        </div>

				        <div className="col-sm-7 brd-btm">
				    		<h5>technologies</h5>
				    			<div className="progress-item">
					    		<span className="progress-title">Java8 + Hibernate + Spring</span>
					    		<ProgressBar now={90} variant="dark"></ProgressBar>
					    		</div>
					    		<div className="progress-item">
					    		<span className="progress-title">Javascript + Angular + HTML5 + CSS + REST</span>
					    		<ProgressBar now={80} variant="dark"></ProgressBar> 
					    		</div>
					    		<div className="progress-item">		
					    		<span className="progress-title">SQL + Oracle DB</span>
					    		<ProgressBar now={80} variant="dark"></ProgressBar> 
					    		</div>
					    		<div className="progress-item">
					    		<span className="progress-title">Docker + Kubernetes</span>
					    		<ProgressBar now={70} variant="dark"></ProgressBar> 
					    		</div>
					    		<div className="progress-item">
					    		<span className="progress-title">Agile + Continuous Integration</span>
					    		<ProgressBar now={90} variant="dark"></ProgressBar> 
					    		</div>
					    		<div className="progress-item">
					    		<span className="progress-title">Test Driven Development</span>
					    		<ProgressBar now={90} variant="dark"></ProgressBar> 
					    		</div>
					    		<div className="progress-item">
					    		<span className="progress-title">Clean Code + Design Patterns</span>
					    		<ProgressBar now={90} variant="dark"></ProgressBar> 
					    		</div>
				    	</div>
				    </div>

					<div className="row">
						 <div className="col-sm-5 brd-btm">
							<h5>personal characteristics</h5>
							<div>
								<ul className="center">
									<li><div><span><FontAwesomeIcon icon={faCheck} size="sm" /></span> curious</div></li>
									<li><div><span><FontAwesomeIcon icon={faCheck} size="sm" /></span> flexible</div></li>
									<li><div><span><FontAwesomeIcon icon={faCheck} size="sm" /></span> determined</div></li>
									<li><div><span><FontAwesomeIcon icon={faCheck} size="sm" /></span> caring</div></li>
								</ul>
							</div>
						</div>
				    	<div className="col-sm-7 brd-btm">
					    	<h5>languages</h5>
					    	<div className="lng-bullets">
				                 <ProgressBullets bulletsFilled="5" bulletsCount="5" title="Polish" level="mother tongue"></ProgressBullets>
				                 <ProgressBullets bulletsFilled="5" bulletsCount="5" title="English" level="proficient"></ProgressBullets>
				                 <ProgressBullets bulletsFilled="5" bulletsCount="5" title="German" level="proficient"></ProgressBullets>
				                 <ProgressBullets bulletsFilled="3" bulletsCount="5" title="French" level="intermediate"></ProgressBullets>
				                 <ProgressBullets bulletsFilled="1" bulletsCount="5" title="Russian" level="beginner"></ProgressBullets>
					        </div>
				        </div>
					</div>

					<div className="row bottom">
							<div className="col">
								<h5>interests</h5>
								<div className="row center">
									<div className="col-sm-2">
										<div><span><FontAwesomeIcon icon={faLock} size="lg" /></span></div><div>privacy</div>
									</div>	
									<div className="col-sm-2">
										<div><span><FontAwesomeIcon icon={faPencilAlt} size="lg" /></span></div><div>design</div>
									</div>
									<div className="col-sm-2">
									<div><span><FontAwesomeIcon icon={faHiking} size="lg" /></span></div><div> trekking</div>
									</div>	
									<div className="col-sm-2">
									<div><span><FontAwesomeIcon icon={faYinYang} size="lg" /></span> </div><div>yoga</div>
									</div>
									<div className="col-sm-2">
									<div><span><FontAwesomeIcon icon={faSnowboarding} size="lg" /></span></div><div> snowboard</div>
									</div>	
								</div>
							</div>
					</div>

				</div>
		)
	}
}

export default Skills