import React from 'react'
import './Intro.css';
import btnImg from '../../assets/hireme.png';
import bg from '../../assets/image.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className = "hello">Hello</span>
            <span className = "introText">I'm <span className='introName'>Jeremiah Samuel</span> <br /> Web developer</span>
            <p className = "introPara">I am a skilled web developer with experience in creating <br/> and building appealing and user friendly frontend web applications</p>
            <Link><button className='btn'><img src= {btnImg} alt="" className='btnImg'/> Hire Me</button></Link>
        </div>
        <img src = {bg} alt = "Profile" className='bg' />
        
        </section>
  )
}

export default Intro