import React from "react";
import Sidebar from './Sidebar';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';
import Maggie from './maggie-circle.svg';
import FunkyMaggie from './funky-maggie-circle.svg';


import Art from './Art';
import Resume from './Resume';
import Contact from './Contact';
import Home from './Home';
import Thoughts from './Thoughts';
import Projects from './Projects';
import ThoughtsFeminism from './thoughts/ThoughtsFeminism';
import ThoughtsDisruption from './thoughts/ThoughtsDisruption';
import ThoughtsChoice from './thoughts/ThoughtsChoice';
import ThoughtsServices from './thoughts/ThoughtsServices';
import ThoughtsCapitalism from './thoughts/ThoughtsCapitalism';
import ThoughtsPropaganda from './thoughts/ThoughtsPropaganda';

import {
  Switch, 
  Route,
  HashRouter
} from 'react-router-dom';


function App() {

  const overlayDisapear = () => {
            $("#sidebar").removeClass('active');
            $('.overlay').removeClass('active');
  }


  const handleClick = () => {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  }

    const getFunky = () => {
                   var element = document.body;
                   element.classList.toggle("funky-mode");
                var x = document.getElementById("funky");
                  if (!element.classList.contains("funky-mode")) {
                    $('.maggie-circle').attr('src',Maggie);
                    x.innerHTML = "Feelin' funky? &#128526;";
                    
                  } else {
                    $('.maggie-circle').attr('src',FunkyMaggie);
                    x.innerHTML = "be serious! &#129299;";
                  }
  }

  return (

    <HashRouter>

    <div className="overlay" onClick={overlayDisapear}></div>
            <Navbar>
                <div className="container">
                    <Button id="sidebarCollapse" variant="dark" onClick={handleClick}>
                        <FontAwesomeIcon icon={faAlignLeft} />
                     </Button>
                     <Button variant="dark" id="funky" onClick={getFunky}>Feelin' funky? <span role="img" aria-label="face with sunglasses">&#128526;</span></Button>
                 </div>


            </Navbar>


           <Sidebar></Sidebar>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/resume' component={Resume} />
              <Route exact path='/thoughts' component={Thoughts} />
              <Route exact path='/disruption' component={ThoughtsDisruption} />
              <Route exact path='/feminism' component={ThoughtsFeminism} />
              <Route exact path='/choice' component={ThoughtsChoice} />
              <Route exact path='/choice' component={ThoughtsChoice} />
              <Route exact path='/propaganda' component={ThoughtsPropaganda} />
              <Route exact path='/capitalism' component={ThoughtsCapitalism} />
              <Route exact path='/services' component={ThoughtsServices} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/art' component={Art} />
              <Route exact path='/projects' component={Projects} />
              <Route render={function () {
                return <p>Not found</p>
              }} />
            </Switch>

            <footer>
              Magdalena Sawyer Resume @ All Rights Reserved 2022
            </footer>


      </HashRouter>

    

  );
}


export default App;
