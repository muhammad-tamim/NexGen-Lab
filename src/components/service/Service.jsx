// import React from 'react';
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMobile, faSearch } from '@fortawesome/free-solid-svg-icons'


const Service = () => {
    return (
        <div>

            <section id="service">
                <div className="container">
                    <h1 className="sub-title">Our Services</h1>
                    <div className="services-list">
                        <div className='services'>
                            <span className='icon'>
                                <FontAwesomeIcon icon={faCode} />
                            </span>
                            <h2>Web Development</h2>
                            <p> We are your top choice for web development offering expertise, innovation,
                                and excellence to bring your digital vision to life.</p>
                            <a href="#">Learn more..</a>
                        </div>
                        <div className='services'>
                            <span className='icon'>
                                <FontAwesomeIcon icon={faMobile} />
                            </span>
                            <h2>Android & IOS App</h2>
                            <p>We excel in Android and iOS development, providing top-notch expertise
                                and tailored solutions to elevate your mobile apps.</p>
                            <a href="#">Learn more..</a>
                        </div>
                        <div className='services'>
                            <span className='icon'>
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <h2>SEO</h2>
                            <p>We are the go to for SEO excellence, crafting strategies that elevate
                                your online presence and make us the top choice in digital optimization.</p>
                            <a href="#">Learn more..</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;