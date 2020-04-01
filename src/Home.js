import React from 'react';
import {HashRouter, Link} from 'react-router-dom';

import Maggie from './maggie-circle.svg';

class Home extends React.Component {

	render() {
		return (
            <div className="container">
                <div className="row d-sm-none d-xs-block">
                          <img className="maggie-circle" src={Maggie} alt="Maggie..." width="50%">
                          </img>
                </div>
                <div className="row d-sm-none d-xs-block content-white">
                        <HashRouter>
                            <div>
                                <h2>I'm Magda!</h2>
                                <h3>Nice to meet you!</h3>
                                <div className="line"></div>
                                <p>This website is home to my <Link to="projects"><u><b>projects</b></u></Link>
                                , <Link to="thoughts"><u><b>thoughts</b></u></Link>
                                , <Link to="art"><u><b>designs</b></u></Link> & <Link to="resume"><u><b>resume</b></u></Link>. Feel free to look around!</p>
                                <div className="line"></div>
                                <p>It's also a space where I learn and experiment, so please do not hold it against me if something does not work or look perfectly.</p>
                                <div className="line"></div>
                                <p>If you want to work with me or just have a chat, please <Link to="contact"><u><b>get in touch!</b></u></Link></p>

                            </div>
                        </HashRouter>
                </div>
                <div className="row">
                    <div className="col-sm-3 d-none d-sm-block">
                        <div className="row">
                          <img className="maggie-circle" src={Maggie} alt="Maggie...">
                          </img>
                        </div>
                    </div> 
                    <div className="col-sm-9 content-white d-none d-sm-block">
                        <HashRouter>
                            <div>
                                <h2>I'm Magda!</h2>
                                <h3>Nice to meet you!</h3>
                                <div className="line"></div>
                                <p>This website is home to my <Link to="projects"><u><b>projects</b></u></Link>
                                , <Link to="thoughts"><u><b>thoughts</b></u></Link>
                                , <Link to="art"><u><b>designs</b></u></Link> & <Link to="resume"><u><b>resume</b></u></Link>. Feel free to look around!</p>
                                <div className="line"></div>
                                <p>It's also a space where I learn and experiment, so please do not hold it against me if something does not work or look perfectly.</p>
                                <div className="line"></div>
                                <p>If you want to work with me or just have a chat, please <Link to="contact"><u><b>get in touch!</b></u></Link></p>

                            </div>
                        </HashRouter>
                    </div>
                </div>
            </div>
			);
	}
}

export default Home;