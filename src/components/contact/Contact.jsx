import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiLinkedinLine, RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_do9zgds', 'template_neab7ls', form.current, 'dF4J0brR81hi-kHRG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div data-aos="fade-right" className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mohd.abd.6602@gmail.com</h5>
            <a href="mailto:mohd.abd.6602@gmail.com">Email Me</a>
          </article>
          <article className='contact__option'>
            <RiLinkedinLine className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>anas-iqbal-07053b261</h5>
            <a href="https://www.linkedin.com/in/anas-iqbal-07053b261/" target="_blank" rel='noreferrer'>Let's Conenct</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 00000 00000</h5>
            <a href="https://api.whatsapp.com/send?phone+918115540055" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form data-aos="fade-left" ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact