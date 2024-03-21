import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skill = () => {
  return (
    <section id = 'skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src ={UIDesign} alt="UIDesign" className='skillBarImg' />
                    <div className = "skillBarText">
                            <h2>UI/UX Design</h2>
                            <p>My Demo Text</p>
                        </div>

                </div>

                <div className='skillBar'>
                <img src ={WebDesign} alt="WebDesign" className='skillBarImg' />
                    <div className = "skillBarText">
                            <h2>Web Design</h2>
                            <p>Lets write our content here</p>
                        </div>

                </div>


                <div className='skillBar'>
                <img src ={AppDesign} alt="AppDesign" className='skillBarImg' />
                    <div className = "skillBarText">
                            <h2>App Design</h2>
                            <p>Writing my content Here</p>
                        </div>

                </div> 
        </div>
    </section>
  )
}

export default Skill