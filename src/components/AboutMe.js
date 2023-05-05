import React from 'react'
import { forwardRef } from 'react'
import './AboutMe.css'
import resume from '../files/Resume.pdf'


const AboutMe=forwardRef(({Contact},AboutMe) =>{
  return (
    <div ref={AboutMe} className='about'>  
        <div className='text'>
            <h1 className='name'> 
                Konstantinos Varnalidis 
            </h1>
            <h2 className="stack">
              Full-Stack Enginner
            </h2>
            <p>
              I am an Full-Stack developer with a passion to learn.My biggest advantage is my ability to teach my self new skills.
              I love coding and basketball and right now I am try to develop a stats app for the  Euroleague and the NBA.
            </p>
            <div className='buttons'>
            <a href={resume} download="Resume.pdf" target="_blank" rel="noreferrer"><button className="button">Resume</button></a>
            <button className="button" onClick={()=>Contact.current.scrollIntoView({behavior:"smooth"})} ><span>Contact Me </span></button>
            </div>
        </div>
    </div>
  )
});

export default AboutMe