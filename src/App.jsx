import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Nav/header'
import Slider from './components/slider/Slider'
import Service from './components/service/Service'
import Footer from './components/footer/footer'
import OurTeam from './components/our-team/Our-team'
import About from './components/about/About'
{
  /* The following line can be included in your src/index.js or App.js file */
}
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <About></About>
      <Service></Service>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </>
  )
}

export default App
