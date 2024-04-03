import React from 'react'
import './Skills.css'
// import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
// import AppDesign from '../../assets/app-design.png';

const Skill = () => {
  return (
    <section id = 'skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'> As a frontend designer and developer, I place high premium in transforming digital ideas into reality. 
        I build mobile and web applications incorporating user experience approach for smooth user operations and meeting of clients business goals.</span>
        

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