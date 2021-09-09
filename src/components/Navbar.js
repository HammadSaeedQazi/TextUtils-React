import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props){
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">{props.title}</a> */}
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link" aria-current="page" href="#">Home</a> */}
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          {/* Code for color pallets */}
          {/* <div className="d-flex"> */}
            {/* <div className="bg-success rounded mx-2 position-absolute m-3" style={{height:'30px', width:'30px', right:'150px', top:'0px', cursor: 'pointer'}} onClick={()=>{props.toggleMode("success")}}></div> */}
            {/* <div className="bg-danger rounded mx-2 position-absolute m-3" style={{height:'30px', width:'30px', right:'190px', top:'0px', cursor: 'pointer'}} onClick={()=>{props.toggleMode("danger")}}></div> */}
            {/* <div className="bg-warning rounded mx-2 position-absolute m-3" style={{height:'30px', width:'30px', right:'230px', top:'0px', cursor: 'pointer'}} onClick={()=>{props.toggleMode("warning")}}></div> */}
            {/* <div className="bg-primary rounded mx-2 position-absolute m-3" style={{height:'30px', width:'30px', right:'270px', top:'0px', cursor: 'pointer'}} onClick={()=>{props.toggleMode("primary")}}></div> */}
          {/* </div> */}

          <div className={'form-check form-switch position-absolute end-0 m-3 text-white'}>
            <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" id="flexSwitchCheckDefault" style={{cursor: 'pointer'}}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === "dark" ? "Light" : "Dark"} Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Navbar.propTypes = {title: PropTypes.string.isRequired}
Navbar.propTypes = {title: PropTypes.string}
Navbar.defaultProps = {title: 'Title here'}
