import React from 'react';
import Maggie from './maggie-circle.svg';
import Monopoly from './monopoly2.svg';
import Tariq from './tariq.svg';
import Mama from './mama.svg';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import $ from 'jquery';

import './Art.css';


class Art extends React.Component {


	renderImage(imgSrc, category) {
		let allClasses = "col-sm-5 filterDiv " + category;
	    return (
	      <div className={allClasses}>
	        <img src={imgSrc} width="80%" alt="artsy fartsy"/>
	      </div>
	    );
  	};

	state = {
      art: [
        {
          src: Maggie,
          category: 'people'
        },
        {
          src: Tariq,
          category: 'people'
        },
        {
          src: Mama,
          category: 'people'
        },
        {
          src: Monopoly,
          category: 'cartoons'
        },
        ]
    };


	render() {

	const filterSelection = (c) => {
				console.log(c);
	if (c === "all") {
		$(".filterDiv").each(function() {
			$(this).removeClass("hidden");
		});
	} else {	
		$(".filterDiv").each(function() {
			if (!$(this).hasClass(c)) {  
				$(this).addClass("hidden");
			} else {
				$(this).removeClass("hidden");
			}
		});
	}

	};
		return (
			<div className="container content-white">
				<h3>Art</h3>

				  <ToggleButtonGroup type="radio" name="options" defaultValue={"all"} onChange={filterSelection}>
				    <ToggleButton variant="light" value={"all"}>all</ToggleButton>
				    <ToggleButton variant="light" value={"people"}>people</ToggleButton>
				    <ToggleButton variant="light" value={"cartoons"}>cartoons</ToggleButton>
				  </ToggleButtonGroup>

					<div className="row">
	      					{this.state.art.map((image) => this.renderImage(image.src, image.category))}
					</div>

			</div>

		)
	}
}

export default Art;