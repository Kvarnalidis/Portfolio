import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Personal from './components/Personal';
import AboutMe from './components/AboutMe'
import { useRef } from 'react';
function App() {
  const Skills=useRef(null)
  const Projects=useRef(null)
  const Contact=useRef(null)
  return (
    <>
    <Router>
      <Navbar AboutMe={AboutMe} Skills={Skills}Contact={Contact}/>
      <Routes>
        <Route path='/' exact/>
      </Routes>
            <AboutMe ref={AboutMe} Contact={Contact}/>
            <Personal ref={Skills}/>
            <Footer ref={Contact}/>
    </Router>     
    </>

  );
}

export default App;
