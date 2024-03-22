import React from 'react';
import './Intro.css';
// import bg from '../../assets/image.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro' className='intro-container'>
      <div className='introContent'>
        <span className="hello">Hello</span><br/>
        <span className="introText">I'm <span className='introName'>Jeremiah Samuel</span> <br /> FrontEnd Developer </span>
        <p className="introPara"> Specialize in FrontEnd Development while creating high-performance <br/>web applications to drive business success</p>
        <Link to="contact" smooth={true} offset={-100} duration={500}><button className='btn'> Hire Me</button></Link>
      </div>
      {/* <img src={bg} alt="Profile" className='bg' /> */}
    </section>
  )
}

export default Intro;
