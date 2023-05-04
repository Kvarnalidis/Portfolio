import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Personal from './components/Personal';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import { useRef } from 'react';
function App() {
  const projects=useRef(null)
  const Contact=useRef(null)
  const personal=useRef(null)
  return (
    <>
    <Router>
      <Navbar AboutMe={AboutMe} personal={personal}Contact={Contact} projects={projects} />
      <Routes>
        <Route path='/' exact/>
      </Routes>
            <AboutMe ref={AboutMe} Contact={Contact}/>
            <Personal ref={personal}/>
            <Projects ref={projects}/>
            <Footer ref={Contact}/>
    </Router>     
    </>

  );
}

export default App;
