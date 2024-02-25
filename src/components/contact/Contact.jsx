// import React from 'react';
import './Contact.css'
import contactGif from "../../../public/images/contact-animation.gif";

const Contact = () => {
    return (
        <div id='contact'>
            <section>
                <h1>Contact Us</h1>
                <div className="contact">
                    <div className="contact-input">
                        <input className='name' placeholder='Name' type="name" />
                        <br />
                        <input className='email' placeholder='E-mail' type="email" />
                        <textarea className='massage-field' placeholder='Massage..' name="" id=""></textarea>
                        <br />
                        <a href="#">Submit</a>
                    </div>
                    <div className="contact-img">
                        <img src={contactGif} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;