import React from 'react';
import Avatar from './avatar.png';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class Resume extends React.Component {

	render() {
	    return (
	    	<div className="container">
	    	<div className="row">
				<Card className="col-sm-4">
					<Card.Img variant="top" src={Avatar} className="rounded-circle"/>
					<Card.Body>
					<Card.Title>Magdalena Sadlo</Card.Title>
					<Card.Text>
					<p>Software Engineer | Consultant <a href="https://www.linkedin.com/in/magdalena-sadło-30a16058">
						 	<FontAwesomeIcon icon={faLinkedin} size="lg" />
						</a></p>
					</Card.Text>
						<Button variant="light"><a href="CV_ Magdalena_Sadlo.pdf"  download="CV_ Magdalena_Sadlo.pdf">Download Resume</a></Button>
					</Card.Body>
				</Card>

				<div className="col-sm-6 content-white">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero felis, iaculis vitae augue vitae, sagittis mattis odio. Mauris nec enim vel ex feugiat ultrices. In maximus nisl est, at efficitur sapien iaculis sit amet. Suspendisse convallis eget nunc ut suscipit. Donec eget laoreet tellus. Aenean consequat maximus ante, et gravida est pretium id. Nulla vel interdum leo. Proin porttitor nibh eu neque placerat, sit amet lacinia ex finibus. Sed diam metus, ultrices a egestas congue, fermentum in urna. Quisque aliquam porttitor velit, sed vehicula sapien ultricies eu. Donec vitae quam sapien. Sed tristique orci nec felis dictum mollis. Pellentesque vestibulum mauris eu interdum cursus.

Vestibulum ultricies, nibh non viverra tincidunt, risus lectus consequat enim, eget elementum augue ipsum id erat. Aliquam non vulputate neque. Vestibulum faucibus pulvinar ligula, vitae sagittis orci iaculis quis. Pellentesque volutpat in eros a sagittis. Pellentesque a est pharetra, lobortis purus quis, mollis eros. Donec sem augue, viverra fermentum dolor nec, sagittis pellentesque turpis. Aliquam rutrum vitae urna ut placerat. Morbi fermentum eros sit amet metus ullamcorper tristique. Nulla sed nisi in enim venenatis fermentum at sit amet ante. Proin bibendum hendrerit felis eu consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vel ultricies est. Vivamus venenatis volutpat elementum. Praesent vel venenatis diam. Quisque ac commodo lacus.

Nunc maximus augue ac viverra bibendum. Proin sed nulla eu diam faucibus facilisis at vel neque. Pellentesque bibendum tempor leo. Curabitur metus nunc, tempor ac pretium non, molestie fringilla velit. Aenean rhoncus pharetra pellentesque. Nullam ornare dapibus mi, nec auctor mauris bibendum tincidunt. Quisque orci erat, lobortis nec porta eget, porttitor ac dui. Suspendisse sollicitudin justo nec sollicitudin commodo. Sed urna sem, laoreet eu turpis sed, eleifend facilisis nulla. Sed ac velit fringilla, aliquam risus sed, accumsan massa. Sed elementum nunc eu risus facilisis laoreet in sit amet nibh. Ut in erat a elit elementum interdum. Proin vehicula, lacus tempor scelerisque blandit, nunc lacus malesuada purus, in venenatis massa velit vel quam. Vestibulum suscipit metus et enim tristique iaculis. Praesent non erat porta, cursus purus vitae, faucibus diam.

Vivamus id arcu in enim auctor sollicitudin. Mauris augue augue, sagittis sit amet mauris id, maximus rutrum quam. Pellentesque at venenatis diam. Mauris dignissim eleifend massa lacinia vestibulum. Sed eu lorem libero. Praesent orci lorem, mollis sed dignissim ac, bibendum vel sem. Mauris bibendum fringilla efficitur. Morbi non turpis et lorem congue luctus. Phasellus accumsan aliquet tortor, a tempus nisl efficitur nec. Proin in pharetra nulla. Sed maximus tortor ut posuere commodo.

Aliquam consectetur cursus tincidunt. Aliquam vel massa mi. Donec ornare gravida luctus. Vivamus justo eros, lobortis vel ultricies vitae, dapibus eu metus. Donec ut tristique ex. Cras ac aliquet sem. Aliquam erat volutpat. Curabitur at posuere ex, eu ultricies sem.</p>
	    		</div>



	</div>

	</div>


	    	)
	}
}

export default Resume;