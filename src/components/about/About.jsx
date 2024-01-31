import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <section className="about">
                <div className="about-img">
                    <img src="../../../public/images/teamwork-animated-picture-removebg.png" alt="" />
                </div>
                <div className="about-info">
                    <h1>About Us</h1>
                    <p>
                        At the forefront of technological evolution, our software company is
                        committed to delivering unparalleled solutions. Specializing in web
                        development, Android and iOS applications, and advanced SEO strategies,
                        we fuse creativity with cutting-edge technology to redefine digital experiences
                        for businesses.
                    </p>
                    <a href="">Contact us</a>
                </div>
            </section>
        </div>
    );
};

export default About;