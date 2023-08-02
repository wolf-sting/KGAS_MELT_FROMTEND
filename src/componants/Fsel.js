  import React, { useRef, useState, Component } from 'react';
  import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
  import { BrowserRouter as Router, Switch, Route, useNavigate } from 'react-router-dom';
  import { Link } from 'react-router-dom';

  import '../Fsel.css';
  import Axios from 'axios';

  function Fsel() {
    const navigate = useNavigate();
    

  const [files1, setFiles1] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [files3, setFiles3] = useState([]);
  const [vis,setvis] = useState(["none"])
  
  const handleFile = (event, fieldNumber) => {
    const selectedFiles = [...event.target.files];
    switch (fieldNumber) {
      case 1:
        setFiles1(selectedFiles);
        break;
      case 2:
        setFiles2(selectedFiles);
        break;
      case 3:
        setFiles3(selectedFiles);
        break;
      default:
        break;
    }
  };
    
  const handleUid = () =>{

    navigate({ pathname: '/user_re' });

  }

    const handleButtonClick = () => {
      if (files1.length === 0 || files2.length === 0 || files3.length === 0) {
       setvis(``)
        return; // Prevent form submission
      }

      
      const formData  = new FormData();
      
    for (let i = 0; i < files1.length; i++) {
      formData.append(`file`, files1[i]);
    }
    for (let i = 0; i < files2.length; i++) {
      formData.append(`file`, files2[i]);
    }
    for (let i = 0; i < files3.length; i++) {
      formData.append(`file`, files3[i]);
    }


      Axios.post('http://52.91.240.60:3000/api/upload', formData)
        .then(response => {
          if (response) {
            console.log(response);
            const jsonData = response.data;

            localStorage.setItem('jsonData', JSON.stringify(jsonData));
            navigate({ pathname: '/Sys', state: { jsonData } });
            // console.log(jsonData);

            
          }
        })
        .catch(error => {
          console.error(error);
        })



      
       
    };

    return (
      <div id='fs'>
        <h1>Please select/upload your files</h1>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupFile01">Sourse</label>
          <input type="file" name='file' className="form-control" id="inputGroupFile01" multiple           onChange={(e) => handleFile(e, 1)}
 />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupFile02">Target</label>
          <input type="file" className="form-control" id="inputGroupFile02" multiple           onChange={(e) => handleFile(e, 2)}
 />
        </div>

        <h1>Please select Alignment Reference</h1>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupFile03">Reference</label>
          <input type="file" className="form-control" id="inputGroupFile03" multiple           onChange={(e) => handleFile(e, 3)}
 />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
          Submit
        </button>

        <button type="button" style={{marginLeft:10}} onClick={handleUid} class="btn btn-outline-info">Already have UID</button>

        <div className="alert alert-danger" style={{ display : vis }} role="alert">
  A simple danger alert—check it out!
</div>
      </div>
    );
  }

  export default Fsel;
