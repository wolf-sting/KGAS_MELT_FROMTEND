import React, { useRef, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import '../Fsel.css';
import Axios from 'axios';
import { Button } from 'bootstrap';
export default function Email() {
    const navigate = useNavigate();

    
  const jsonData = JSON.parse(localStorage.getItem('jsonData'));
  console.log(jsonData );

    const [email, setemail] = useState([]);

    const handleChange = (event) => {
        setemail(event.target.value);
      };


    const handleButtonClick = ()=>{


        const payload = {
            email:email,
            uid:jsonData
            
          };




        Axios.post('http://52.91.240.60:3000/api/output',payload)
        .then(response => {
          if (response) {
            console.log(payload);
            console.log(response);
            navigate({ pathname: '/Thank',State:{jsonData}});
    
            
          }
        })
        .catch(error => {
          console.error(error);
        })
    

    }





  return (
   <div>

    <h1> Your Alignment is Succcessfull</h1>
    <h2>Please enter a Email</h2>

    
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
 
  <button type="button" onClick={handleButtonClick} className="btn btn-primary">Submit</button>

   </div>
  )
}
