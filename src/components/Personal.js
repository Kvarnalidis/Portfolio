import React from 'react'
import './Personal.css'
import { forwardRef } from 'react'

const Personal=forwardRef((props,ref)=> {
  return (
    <div ref={ref} className='skills-container'>
      <div className='card'>
          <h1 className='card-title'>Front-End</h1>
          <div className='card-item'>
            <img className='iimg' src={require('./img/html.png')} alt=''>
            </img>
            <img className='iimg' src={require('./img/css.png')} alt=''>
            </img>
          </div>
          <div className='card-item'>
            <img className='iimg' src={require('./img/react.png')} alt=''>
            </img>
          </div>
      </div>
      <div className='card'>
        <h1 className='card-title'>Back-End</h1>
        <div className='card-item'>
            <img className='iimg' src={require('./img/python.png')} alt=''>
            </img>
            <img className='iimg' src={require('./img/c.png')} alt=''>
            </img>
          </div>
          <div className='card-item'>
          <img className='iimg' src={require('./img/java.png')} alt=''>
            </img>
            <img className='iimg' src={require('./img/js.png')} alt=''>
            </img>
          </div>
          <div className='card-item'>
          <img className='iimg' src={require('./img/sql.png')} alt=''>
            </img>
            <img className='iimg' src={require('./img/django.png')} alt=''>
            </img>
          </div>
      </div>
      <div className='card'>
        <h1 className='card-title'>Tools</h1>
        <div className='card-item'>
          <img className='iimg' src={require('./img/postgre.png')} alt=''>
            </img>
            <img className='iimg' src={require('./img/vs.png')} alt=''>
            </img>
          </div>
          <div className='card-item'>
          <img className='iimg' src={require('./img/git.png')} alt=''>
            </img>
            <img className='iimg' src={require('./img/post.png')} alt=''>
            </img>
          </div>
          <div className='card-item'>
          <img className='iimg' src={require('./img/linux-logo.png')} alt=''>
            </img>
          </div>
      </div>
      <div className='card'>
          <h1 className='card-title'>Studying</h1>
          <div className='card-item'>
            <img className='iimg' src={require('./img/aws.png')} alt=''>
            </img>
            <img className='iimg' src={require('./img/download.png')} alt=''>
            </img>
          </div>
      </div>
    </div>
  )
});

export default Personal;