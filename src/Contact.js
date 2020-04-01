import React from 'react';
import './Contact.css';

class Contact extends React.Component {

	render() {
		return (
<div className="container content-white">
        <h2>contact me</h2>

        <div>
            <form action="https://formspree.io/magda.sadlo@protonmail.com" method="POST">

                <div className="row">
                    <div className="offset-sm-1 col-sm-6">
                        <label className="form-label" for="author">Your Name</label>
                        <input id="author" className="form-item" name="name" type="text"/>
                    </div>
                </div>

                <div className="row">
                    <div className="offset-sm-1 col-sm-6">
                        <label className="form-label" for="email">Your E-mail</label>
                         <input id="email" className="form-item" type="email" name="_replyto" required="required"/>
                     </div>
                </div>

                <div className="row">
                    <div className="offset-sm-1 col-sm-6">
                        <label className="form-label" for="comment">Your Message</label>
                        <textarea id="comment" className="form-item" name="message"></textarea>
                    </div>
                </div>

                <div className="row form-submit">
                    <div className="offset-sm-1 col-sm-6">
                    <input className="btn btn-dark btn-lg" type="submit" value="Send"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
			);
	}
}

export default Contact;