import React, { forwardRef } from 'react'
import './Projects.css'
import './ProjectCard'
import ProjectCard from './ProjectCard'
import portimg from './img/portfolio.png'
import chessimg from './img/chess.png'
import recsys from './img/recsys.png'
const Projects=forwardRef((props,Projects) =>{
    const portfoliodesc="This in my personal portfolio which uses React.js JavaScript and CSS.It does't have any back end logic and it's hosted on github. For more information you can check the github repo bellow."
    const portfoliogit="https://github.com/Kvarnalidis/Portfolio"
    const chessdesc="This is my try to code a chess game with an AI opponent 'right now it's just with yourself:('.It's made with Python and Pygame.You can try it by downloading the source code and installing Pygame."
    const chessgit="https://github.com/Kvarnalidis/chessGame"
    const recsysdesc="This in a tourist attractions Recommendation App it is built with Django as a framework Python for back end and Sqllite database,Html and Css for it's front end.The gem behind it is an Euclidean Distance algorithm which based on your inputs it recommends the best choice for you."
    const recsysgit="https://github.com/Kvarnalidis/Recommendation_System"
  return (
    <div className='projects-container'ref={Projects}>
        <ProjectCard desc={portfoliodesc} github={portfoliogit} img={portimg}/>
        <ProjectCard desc={chessdesc} github={chessgit} img={chessimg}/>
        <ProjectCard desc={recsysdesc} github={recsysgit} img={recsys}/>
    </div>

  )
})

export default Projects