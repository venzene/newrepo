import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(props) {
  const red=()=>{
    document.body.style.backgroundColor='rgb(107 31 32)';
  }
  const blue=()=>{
    document.body.style.backgroundColor='#042743';
  }
  const yellow=()=>{
    document.body.style.backgroundColor='rgb(29 75 34)';
  }
  const green=()=>{
    document.body.style.backgroundColor='rgb(146 122 59)';
  }
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mb-3`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      
      <div className="color" style={{ display: `${props.mode==="light"?'none':'inline'}` }}>
      <button className="circle btn-1" onClick={red}></button>
<button className="circle btn-2" onClick={blue}></button>
<button className="circle btn-3" onClick={yellow}></button>
<button className="circle btn-4" onClick={green}></button>
</div>
      <div className={`form-check form-switch text-${props.mode==="light"?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
