import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_euq5lde', 'template_is1ik9x', form.current, 'uMbfeM3Ed-ldL3sFK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <section id="contact">
      <h5>Get inTouch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
        <article className="contact__option">
         <MdOutlineMail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>dummyegator@gmail.com</h5>
          <a href="mailto:yahyaammar4807@gmail.com"  target="_blank">Send a Message</a>
        </article>
        <article className="contact__option">
         <RiMessengerLine className='contact__option-icon'/>
          <h4>MEssenger</h4>
          <h5>Yahya Ammar</h5>
          <a href="https://m.me/username"  target="_blank">Send a Message</a>
        </article>
        <article className="contact__option">
         <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>dummyegator@gmail.com</h5>
          <a href="https://api.whatsapp.com/send?phone=+923345413268" target="_blank">Send a Message</a>
        </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea  name="message" rows="7" placeholder="Your Message" required />
              <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
      </div>  
    </section>
  )
}

export default Contact