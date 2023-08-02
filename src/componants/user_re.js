import React, { useRef, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import '../Fsel.css';
import Axios from 'axios';
import { Button } from 'bootstrap';


export default function User_re() {


  const navigate = useNavigate();

    const [email, setemail] = useState([]);
    const [uid,setuid] = useState([])

    const handleChange = (event) => {
        setemail(event.target.value);
        setuid(event.target.value)
      };
      const handleChange2 = (event) => {
       
        setuid(event.target.value)
      };



    const handleButtonClick = ()=>{

      console.log(email);
      console.log(uid);

      localStorage.setItem('jsonData', JSON.stringify(uid));
      console.log(uid);

        const payload = {
            email:email,
            uid:uid
            
          };




        Axios.post('http://52.91.240.60:3000/api/output',payload)
        .then(response => {
          if (response) {
            console.log(payload);
            console.log(response);
            navigate({ pathname: '/Thank'});
    
            
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
    <label  className="form-label">UID</label>
    <input type="email" className="form-control" onChange={handleChange2} ></input>
  </div>
 
  <button type="button" onClick={handleButtonClick} className="btn btn-primary">Submit</button>



    </div>
  )
}
