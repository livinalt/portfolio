import React from 'react'
import './Skills.css'
// import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
// import AppDesign from '../../assets/app-design.png';

const Skill = () => {
  return (
    <section id = 'skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'> I specialize in transforming digital ideas into reality. As a FrontEnd Developer, 
        I craft sleek websites and user-friendly web apps, prioritizing seamless browsing experiences.</span>
        

                <div className='skillBar'>
                <img src ={WebDesign} alt="WebDesign" className='skillBarImg' />
                    <div className = "skillBarText">
                            <h2>Web Development</h2>
                            <p>I bring designs to life by implementing clean and efficient code. Using a blend of HTML, CSS, and JavaScript, 
                                I ensure that websites and applications not only look visually appealing but also function smoothly across various devices and platforms</p>
                        </div>

                </div>


    </section>
  )
}

export default Skill