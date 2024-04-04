import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

import BehanceIcon from '../../assets/behance.png';
import TwitterIcon from '../../assets/twitter.png';
import GithubIcon from '../../assets/github.png';
import { toast } from 'react-toastify';

const YOUR_SERVICE_ID = "service_bww9ldi";
const YOUR_TEMPLATE_ID = "template_oav4w2h";
const YOUR_PUBLIC_KEY = "XIknskc99KKa5CqI0";

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set loading state to true when submitting

        emailjs
            .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
                publicKey: YOUR_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Message sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            )
            .finally(() => {
                setIsSubmitting(false); // Reset loading state after submission
            });
    };

    return (
        <section id="contactPage">
            <div className='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>

                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type ="text" name="user_name" className='name' placeholder='your name' />
                    <input type ="email" name="user_email" className='email' placeholder='your email' />
                    <textarea className='email' name='message' rows= "5" placeholder='your message'></textarea>
                    <button type="submit" disabled={isSubmitting} className='submitBtn'>
                        {isSubmitting ? 'sending...' : 'Submit'}
                    </button>

                    <div className='links'>
                        <img src = {BehanceIcon} alt='BehanceIcon' className='link' />
                        <a href="https://github.com/livinalt"><img src = {GithubIcon} alt='GithubIcon' className='link' /></a>
                        <a href="https://twitter.com/JeremiahDSamuel"><img src = {TwitterIcon} alt='TwitterIcon' className='link' /></a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
