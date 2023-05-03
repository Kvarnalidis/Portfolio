import React, { forwardRef,useRef } from 'react';
import './Footer.css';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Mailto from 'react-mailto-link';
const  Footer=forwardRef((props,ref)=> {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ugsx12n', 'template_8r84nd9', form.current, '4ih39sMyMnOpB2CeL')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
    
    <div ref={ref} className='contact-container'>
      <div className='container'>
        <div className='contact-information'>
          <h1> Contact Me</h1>
          <p className='contact-item'>
            <FontAwesomeIcon className='icon' icon={faPhone}/>
            +30 6946007210
          </p>
          <p className='contact-item'>
            <FontAwesomeIcon className='icon' icon={faLinkedin}/>
            <a  className='c-link' href="https://www.linkedin.com/in/kostas-varnalidis-779838256" >Kostas Varnalidis</a>
          </p>
          <p className='contact-item'>
          <FontAwesomeIcon className='icon' icon={faEnvelope}/>
            <Mailto  className='c-link' email='kostasvarnalidis@gmail.com' >
                kostasvarnalidis@gmail.com
              </Mailto>
          </p>
        </div>
        <div className='form-container'>
          <form ref={form} onSubmit={sendEmail} >
            <div className='form-item'>
              <label className='label'>Name</label>
              <input className='text1'type='text'></input>
            </div>
            <div className='form-item'>
              <label className='label'>Email</label>
              <input className='text1'type='text'></input>
            </div>
            <div className='form-item'>
              <label className='label'>Message</label>
              <textarea className='text1' name="message" />
            </div>
            <div className='button-item'>
              <input className='button1' type="submit" value="Send" />
            </div>
            
          </form>
        </div>
      </div>
    </div>
    </div>
  );
})
export default Footer;