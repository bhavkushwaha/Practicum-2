import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Packages from './components/pages/Packages';
import Collaborate from './components/pages/Collaborate';
import Contact from './components/pages/Contact';
import './App.css'
import Cards4 from './components/Cards4';
import Cards3 from './components/Cards3';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/packages' element={<Packages/>} />
          <Route path='/collaborate' element={<Collaborate/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/merch' element={<Cards4 />} />
          <Route path='/offers' element={<Cards3 />} />
      </Routes>
      <Footer />
    </Router>
   </>
      
  );
}

export default App;
