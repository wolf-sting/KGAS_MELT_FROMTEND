// import logo from './logo.svg';
import React from 'react';

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import './App.css';
// import kgimg from './kg.png';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  Axios  from 'axios';
import Sys from './componants/syssel';
import Header from './componants/c1'
import Fsel from './componants/Fsel';
import Email from './componants/email';
import Thank from './componants/Thank';
import User_re from './componants/user_re';
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Fsel />} />
          <Route path="Sys" element={<Sys/>} />
          <Route path='email' element={<Email/>}/>
          <Route path='Thank' element={<Thank/>}/>
          <Route path='/User_re' element={<User_re/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

