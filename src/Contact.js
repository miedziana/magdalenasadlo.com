import React from 'react';
import './Contact.css';

class Contact extends React.Component {

	render() {
		return (
<div className="container content-white">
	<div className="col-sm-4"></div>
    <div className="col-md-auto">
        <h2 className="title-lg text-upper">contact me</h2>

        <div class="padd-box-sm">
            <form action="https://formspree.io/magda.sadlo@protonmail.com" method="POST">

                <div className="form-group">
                    <label className="form-label" for="author">Your Name</label>

                    <div class="form-item-wrap">
                        <input id="author" class="form-item" name="name" type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label" for="email">Your E-mail</label>

                    <div class="form-item-wrap">
                        <input id="email" class="form-item" type="email" name="_replyto" required="required"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label" for="comment">Your Message</label>

                    <div class="form-item-wrap">
                        <textarea id="comment" class="form-item" name="message"></textarea>
                    </div>
                </div>

                <div className="form-submit form-item-wrap">
                    <input className="btn btn-dark btn-lg" type="submit" value="Send"/>
                </div>
            </form>
        </div>
    </div>
    <div className="col-sm-4"></div>
</div>
			);
	}
}

export default Contact;