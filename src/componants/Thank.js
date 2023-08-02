import React, { useRef, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import '../Fsel.css';
import Axios from 'axios';
import { Button } from 'bootstrap';


export default function Thank() {

  
  const jsonData = JSON.parse(localStorage.getItem('jsonData'));
  console.log(jsonData );

    const handleButtonClick = ()=>{

      const  payload = {
          uid:jsonData
        }

        Axios.post('http://52.91.240.60:3000/api/download',payload)
        .then(response => {
          if (response) {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'systemAlignment.rdf');
            document.body.appendChild(link);
            link.click();
            
            console.log(response);
           
    
            
          }
        })
        .catch(error => {
          console.error(error);
        })
    
    }

  return (
    <div>

    <h1>Thank you an email has been sent</h1>
    <h2>to download please click the button below</h2>

    <button type="button" onClick={handleButtonClick} className="btn btn-primary">Download now</button>

    </div>
  )
}
