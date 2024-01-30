import React from 'react';
import './Service.css'

const Service = () => {
    return (
        <div>

            <section id="service">
                <div className="container">
                    <h1 className="sub-title">Our Services</h1>
                    <div className="services-list">
                        <div>
                            <i className="fas fa-code"></i>
                            <h2>Web Development</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet, sunt est nemo magni
                                rem? Necessitatibus in illum laboriosam eius.</p>
                            <a href="#">Learn more..</a>
                        </div>
                        <div>
                            <i className="fas fa-crop-alt"></i>
                            <h2>Android App</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet, sunt est nemo magni
                                rem? Necessitatibus in illum laboriosam eius.</p>
                            <a href="#">Learn more..</a>
                        </div>
                        <div>
                            <i className="fa fa-code"></i>
                            <h2>SEO</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet, sunt est nemo magni
                                rem? Necessitatibus in illum laboriosam eius.</p>
                            <a href="#">Learn more..</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;