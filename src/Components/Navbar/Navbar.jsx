import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../Images/freshcart-logo.svg';

export default function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
     <Link className="navbar-brand" to="/">
    <img src={logo} alt='fresh cart' />
    </Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Categories">Categories</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Brands">Brands</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Cart">Cart</Link>
        </li>
      </ul>





      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center ">
      <li className="nav-item">
      <i className="fa-brands fa-instagram m-2"></i>
        </li>

        <li className="nav-item">
        <i className="fa-brands fa-facebook m-2"></i>
        </li>

        <li className="nav-item">
        <i className="fa-brands fa-tiktok m-2"></i>
        </li>
       
        <li className="nav-item">
        <i className="fa-brands fa-twitter m-2"></i>
        </li>
       
        <li className="nav-item">
        <i className="fa-brands fa-linkedin m-2"></i>
             </li>

     <li className="nav-item">
     <i className="fa-brands fa-youtube m-2"></i>
       </li>

       <li className="nav-item">
          <Link className="nav-link " to="/Login">Login</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="/Register">Register</Link>
        </li>

        <li className="nav-item">
          <span className="nav-link" >Logout</span>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
