import React from 'react';
import main from '../../images/main.png';
export default function Main() {
  return (
   <>
   <h1 style={{textAlign:'center',marginTop:'1rem'}}> Main content </h1>

   <form  style={{marginTop:'3rem',width:'70%',marginLeft:'16rem'}}>
  <div className="form-group" style={{marginTop:'2rem'}}>
    <label htmlFor="exampleInputEmail1"><h1>Email address</h1></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group" style={{marginTop:'2rem'}}>
    <label htmlFor="exampleInputPassword1"><h1>Password</h1></label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary "style={{marginTop:'2rem'}}>Submit</button>
</form>
   <img src={main} alt="code" width={'100%'} style={{marginTop:'2rem',maxWidth:'100%',opacity:'0.87'}}/> 
   </>
  )
}