import React, { useRef } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';

import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';

import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';


const YOUR_SERVICE_ID = "service_bww9ldi";
const YOUR_TEMPLATE_ID = "template_oav4w2h";
const YOUR_PUBLIC_KEY = "XIknskc99KKa5CqI0";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
            publicKey: YOUR_PUBLIC_KEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id="contactPage">
        <div className='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable cmpnaies I have worked with includes
            </p>
        </div>

        <div className='clientImgs'>
            <img src = {Walmart} alt = "" className='clientImg' />
            <img src = {Adobe} alt = "" className='clientImg' />
            <img src = {Microsoft} alt = "" className='clientImg' />
            <img src = {Facebook} alt = "" className='clientImg' />
        </div>

        <div className='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>
            
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type ="text" name="user_name" className='name' placeholder='your name' />
                <input type ="email" name="user_email" className='email' placeholder='your email' />
                <textarea className='email' name='message' rows= "5" placeholder='your message'></textarea>
                <button type = "submit" value="send" className='submitBtn'>Submit</button>

                <div className='links'>
                    <img src = {FacebookIcon} alt='facebookIcon' className='link' />
                    <img src = {TwitterIcon} alt='TwitterIcon' className='link' />
                    <img src = {YoutubeIcon} alt='YoutubeIcon' className='link' />
                    <img src = {InstagramIcon} alt='InstagramIcon' className='link' />
                </div>
            
            
            </form>
        </div>
    </section>
  )
}

export default Contact