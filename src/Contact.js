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
                    <label className="col-3 form-label" for="author">Your Name</label>

                    <div class="col-9 form-item-wrap">
                        <input id="author" className="form-item" name="name" type="text"/>
                    </div>
                </div>

                <div className="row">
                    <label className="col-3 form-label" for="email">Your E-mail</label>

                    <div className="col-9 form-item-wrap">
                        <input id="email" className="form-item" type="email" name="_replyto" required="required"/>
                    </div>
                </div>

                <div className="row">
                    <label className="col-3 form-label" for="comment">Your Message</label>

                    <div className="col-9 form-item-wrap">
                        <textarea id="comment" className="form-item" name="message"></textarea>
                    </div>
                </div>

                <div className="row form-submit form-item-wrap">
                    <div className="offset-col-3 col-9">
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