import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
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
                        <img src="../../../public/images/contact-animation.gif" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;