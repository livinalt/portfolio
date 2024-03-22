import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skill = () => {
  return (
    <section id = 'skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'> I specialize in transforming digital ideas into reality. As a FrontEnd Developer, 
        I craft sleek websites and user-friendly web apps, prioritizing seamless browsing experiences. 
        I'm also deeply immersed in UI/UX design, ensuring every aspect of the interface is purposeful and intuitive. 
        Additionally, I excel in smart contract development within the Web3 space, creating secure solutions that revolutionize online transactions. </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src ={UIDesign} alt="UIDesign" className='skillBarImg' />
                    <div className = "skillBarText">
                            <h2>UI/UX Design</h2>
                            <p>Through meticulous attention to detail and a keen understanding of user behavior, 
                                I create designs that seamlessly guide users through their digital journey, enhancing their overall experience</p>
                        </div>

                </div>

                <div className='skillBar'>
                <img src ={WebDesign} alt="WebDesign" className='skillBarImg' />
                    <div className = "skillBarText">
                            <h2>Web Development</h2>
                            <p>I bring designs to life by implementing clean and efficient code. Using a blend of HTML, CSS, and JavaScript, 
                                I ensure that websites and applications not only look visually appealing but also function smoothly across various devices and platforms</p>
                        </div>

                </div>


                <div className='skillBar'>
                <img src ={AppDesign} alt="Web3" className='skillBarImg' />
                    <div className = "skillBarText">
                            <h2>Mobile App Development</h2>
                            <p>With expertise in mobile app development, I create engaging and functional applications for both iOS and Android platforms. 
                                From concept to deployment, I focus on delivering user-friendly experiences that leverage the unique capabilities of mobile devices.</p>
                        </div>

                </div> 
                
                <div className='skillBar'>
                <img src ={AppDesign} alt="Web3" className='skillBarImg' />
                    <div className = "skillBarText">
                            <h2>Web3 dApps</h2>
                            <p>Leveraging on blockchain technology, I write smart contracts to create secure and transparent solutions. By writing robust code and adhering to industry best practices, 
                                I facilitate decentralized transactions and enable innovative applications in areas such as decentralized finance and non-fungible tokens</p>
                        </div>

                </div> 
        </div>
    </section>
  )
}

export default Skill