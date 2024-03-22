import React from 'react'
import './Works.css';
import contact_app from '../../assets/contact-app.png';
import counterApp from '../../assets/counter-app.png';
import multiStepFormApp from '../../assets/multi-step-form.png';
import ecommerceApp from '../../assets/ecommerce-app.png';
import easybankApp from '../../assets/easybank-app.png';
import quizzApp from '../../assets/quiz-app.png';

const Works = () => {
  return (
    <section id="works">
       <h2 className='worksTitle'>My Portfolio</h2>
       {/* <span className='worksDesc'>I take pride in paying attention to the smallest details and </span> */}
       <div className='worksImgs'>
            <div>
              <a href ="https://contactly-wheat.vercel.app/"><img src ={contact_app} alt ="" className='worksImg' /></a>
              <a href = "https://passenger-counter-livinalt.vercel.app/" ><img src ={counterApp} alt ="" className='worksImg' /></a>
              <a href = "https://form-project-seven.vercel.app/" ><img src ={multiStepFormApp} alt ="" className='worksImg' /></a>
            
            </div>

            <div>
              <a href = "https://e-com-livinalt.vercel.app/" ><img src ={ecommerceApp} alt ="" className='worksImg' /></a>
              <a href = "https://easybank-landing-page-livinalt.vercel.app/" ><img src ={easybankApp} alt ="" className='worksImg' /></a>
              <a href = "https://quizz-app-jade.vercel.app/"><img src ={quizzApp} alt ="" className='worksImg' /></a>
            </div>
        </div>   

        <button className='workBtn'>See More</button>

    </section>
  )
}

export default Works