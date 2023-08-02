import React, { useRef, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, useNavigate, json } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import '../Fsel.css';
import Axios from 'axios';
import { Button } from 'bootstrap';
function Sys() {
  const navigate = useNavigate();

  const jsonData = JSON.parse(localStorage.getItem('jsonData'));
  console.log(jsonData);




  const handleButtonClick = (e) => {

    console.log(e.target.value);
    // console.log(jsonData);

    // console.log(jsonData);
    const filenames = jsonData.filename || [];

    console.log(filenames[0],filenames[1],filenames[2]);
    const payload = {
      systems: e.target.value,
      localTestcase1: filenames[0],
      localTestcase2: filenames[1],
      localreference: filenames[2],
      
    };
  


    Axios.post('http://52.91.240.60:3000/api/melt',payload)
    .then(response => {
      if (response) {
        console.log(payload);
        console.log(response);


        const jsonData = response.data;

        localStorage.setItem('jsonData', JSON.stringify(jsonData));
        console.log(jsonData);

        navigate({ pathname: '/email', state: { jsonData } });

        
      }
    })
    .catch(error => {
      console.error(error);
    })






  };



 
  // Now you have the JSON data available in the `jsonData` variable





  return (
    <div id='email'>

      <h1>Files Uploaded Successfully </h1>
      <h2>Please select a Alignment System</h2>

<div className="list-group">
  {/* <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
    The current button
  </button> */}
  <button type="button" onClick={handleButtonClick}  value={`logmap-lite-melt-oaei-2021-web-latest.tar.gz`} className={`list-group-item list-group-item-action`}> Logmap Lite</button>
  <button type="button" onClick={handleButtonClick} value={`logmap-melt-oaei-2021-web-latest.tar.gz`} className="list-group-item list-group-item-action">Logmap</button>
  <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" className="list-group-item list-group-item-action" disabled>A disabled button item</button>
</div>

    </div>
  )
}

export default Sys