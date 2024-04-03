import React from 'react'
import './Works.css';
import contact_app from '../../assets/contact-app.png';
import counterApp from '../../assets/counter-app.png';
import multiStepFormApp from '../../assets/multi-step-form.png';
import ecommerceApp from '../../assets/ecommerce-app.png';
import easybankApp from '../../assets/easybank-app.png';
import quizzApp from '../../assets/quiz-app.png';
import { Box, Flex, Text } from '@radix-ui/themes';

const Works = () => {
  return (
    <section id="works">
       <h2 className='worksTitle'>My Portfolio</h2>
       <span className='worksDesc'> </span>
       

        <main>

        <Flex gap="3" className='worksImgs '>
            <Box width="64px" height="64px" >
              <a href ="https://contactly-wheat.vercel.app/"><img src ={contact_app} alt ="" className='worksImg ' /></a>
              <br/>
              <Text>Contact Form</Text>

            </Box>
            <Box width="64px" height="64px">
              <a href = "https://e-com-livinalt.vercel.app/" ><img src ={ecommerceApp} alt ="" className='worksImg' /></a>
              <br/>
              <Text>e-Commerce Website</Text>
            </Box>
            <Box width="64px" height="64px">
              <a href = "https://passenger-counter-livinalt.vercel.app/" ><img src ={counterApp} alt ="" className='worksImg' /></a>
              <br/>
              <Text>Passenger Counter App</Text>
            </Box>
            <Box width="64px" height="64px">
              <a href = "https://form-project-seven.vercel.app/" ><img src ={multiStepFormApp} alt ="" className='worksImg' /></a>
              <br/>
              <Text>multi-Step Form</Text>
            </Box>
            <Box width="64px" height="64px">
              <a href = "https://easybank-landing-page-livinalt.vercel.app/" ><img src ={easybankApp} alt ="" className='worksImg' /></a>
              <br/>
              <Text>Easy Bank Landing Page</Text>
            </Box>
            
            <Box width="64px" height="64px">
              <a href = "https://quizz-app-jade.vercel.app/"><img src ={quizzApp} alt ="" className='worksImg' /></a>
              <br/>
              <Text>Quizz App</Text>
            </Box>
  </Flex>
  <button className='workBtn'>See More</button>


        </main>

    </section>
    
  )
}

export default Works