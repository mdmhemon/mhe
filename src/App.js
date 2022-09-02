import './CSS/App.css';
import './CSS/nav.css';
import './CSS/Home.css';
import './CSS/About.css';
import './CSS/Footer.css';
//import ImageOne from './Images/FireEmoje.webp'
import Home from './Comp/Home.jsx';
import {About} from './Comp/About.jsx';
import { Routes,Route, Link } from "react-router-dom";
import React from 'react';




function App() {

  return (
     <div className="container">

     <nav>
     <div id="mhemon">MHEmon</div>
     <Link className="link" to="/">Home</Link>
     <Link className="link" to="/about">About</Link>
     </nav>

     <div className="App">
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mhe" element={<Home/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
        <div id="Footer">√MHEmon@2022</div>
    </div>
    </div>
  );
}

export default App;
