import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import kgimg from '../kg.png';

const C1 = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleImageClick = () => {
    
    navigate('/');
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={handleImageClick}> 
          <img src={kgimg} alt="Bootstrap" width="30" height="24" />
        </a>
        <h1 id="h">KGAAS</h1>
      </div>
    </nav>
  );
}

export default C1;
