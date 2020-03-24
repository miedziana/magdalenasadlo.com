import React from 'react';
import Maggie from './maggie-circle.svg';
import Monopoly from './monopoly2.svg';
import Tariq from './tariq.svg';
import Mama from './mama.svg';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';

import './Art.css';


class Art extends React.Component {


	renderImage(imgSrc, category) {
		let allClasses = "col-sm-5 filterDiv " + category;
	    return (
	      <div className={allClasses}>
	        <img src={imgSrc} width="80%"/>
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
          category: 'political'
        },
        ]
    };


filterSelection(c) {
if (c == "all") {
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

}

	render() {
		return (
			<div className="container content-white">
				<h3>Art</h3>

				     <div class="pf-wrap">
                        <div class="pf-filter padd-box">
                            <Button id="btnAll" variant="dark" className="filter active" onClick={() => this.filterSelection('all')}>all</Button>{' '}
                            <Button id="btnPeople" variant="dark" className="filter" onClick={() => this.filterSelection('people')}>people</Button>{' '}
                            <Button id="btnPolitical" variant="dark" className="filter" onClick={() => this.filterSelection('political')}>political</Button>
                        </div>
                    </div>

					<div className="row">
	      					{this.state.art.map((image) => this.renderImage(image.src, image.category))}
					</div>

			</div>

		)
	}
}

export default Art;