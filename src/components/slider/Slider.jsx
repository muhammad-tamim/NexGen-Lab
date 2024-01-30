import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Slider = () => {
    return (
        <div className='first-section'>
            <div className="first-section-content">
                <h1>Make your software <span>fancy</span></h1>
                <a target='blank' href="https://www.facebook.com/MuhammadTamimOfficial">Contact us</a>
            </div>
            <div className="first-section-picture"><img src="../../../public/images/section-1-images-removebg.png" alt="" /></div>
        </div>
    );
};
{/* <Carousel fade>
                <Carousel.Item>
                    <ExampleCarouselImage text="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage text="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage text="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
export default Slider;