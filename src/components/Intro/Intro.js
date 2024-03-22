import React from 'react'
import './Intro.css';
import btnImg from '../../assets/hireme.png';
import bg from '../../assets/image.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className = "hello">Welcome here</span>
            <span className = "introText">I'm <span className='introName'>Jeremiah Samuel</span> <br /> Web developer</span>
            <p className = "introPara"> Specializing in FrontEnd Development I create high-performance <br /> web applications that fuses creativity 
                with innovation to drive business success</p>
            <Link><button className='btn'><img src= {btnImg} alt="" className='btnImg'/> Hire Me</button></Link>
        </div>
        <img src = {bg} alt = "Profile" className='bg' />
        
        </section>
  )
}

export default Intro