import React from 'react';
import logo from '../../images/logo.png';
import  './navbar.css';
export default function Navbar({links}) {
  return (
    <>
    <nav>
       <img src={logo} alt='react-logo' width={'14%'} style={{maxWidth:'100%'}} />
        <ul>
        <a href='#'><h3><li>{links.l1}</li></h3></a>
        <a href='#'><h3><li>{links.l2}</li></h3></a>
        <a href="#"><h3><li>{links.l3}</li></h3></a>
            
        </ul>
        </nav>  
   
    </>
  )
}
