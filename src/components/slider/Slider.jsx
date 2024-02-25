// import React from 'react';
import './Slider.css'
import headerImg from '../../../public/images/section-1-images-removebg.png'

const Slider = () => {
    return (
        <div id="home" className='first-section'>
            <div className="first-section-content">
                <h1>Make your software <span>fancy</span></h1>
                <a target='blank' href="https://www.facebook.com/MuhammadTamimOfficial">Recruit us</a>
            </div>
            <div className="first-section-picture"><img src={headerImg} alt="" /></div>
        </div>
    );
};

export default Slider;