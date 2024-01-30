import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Nav/header'
import Slider from './components/slider/Slider'
{
  /* The following line can be included in your src/index.js or App.js file */
}
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Header></Header>
      <Slider></Slider>
    </>
  )
}

export default App
