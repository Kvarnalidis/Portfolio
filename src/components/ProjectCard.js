import React from 'react'
import './ProjectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
function ProjectCard({desc,github,img}) {
  return (
    <div className='projectCard-container'>
        <div className='projectImage'>
        <img  
        className='prgImg'src={img} alt=''>

        </img>
        </div>
        <div className='project-description'>
            <div className='description'> 
            <p>
                {desc}
            </p>
            </div>
            <div className='project-stack'>
                <a href={github} target='_blank'> 
                <FontAwesomeIcon icon={faGithub} size='2xl' />
                </a>
            </div>
            

        </div>
    </div>
  )
}

export default ProjectCard