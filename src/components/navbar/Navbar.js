import React from 'react';
import logo from '../../images/logo.png';
import  '../../style.css';
export default function Navbar() {
  return (
    <>
    <nav>
       <img src={logo} alt='react-logo' width={'14%'} style={{maxWidth:'100%'}} />
        <ul>
        <a href='#'><h3><li>About</li></h3></a>
        <a href='#'><h3><li>Contact</li></h3></a>
        <a href='#'><h3><li>More</li></h3></a>
            
        </ul>
        </nav>  
   
    </>
  )
}
