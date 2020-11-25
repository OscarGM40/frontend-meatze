import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-md navbar-light bg-success" style={{fontSize:'2rem'}}>
  <Link className="navbar-brand" to="" style={{fontSize:'2rem'}}>Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        {/* <a className="nav-link" href="/">Home</a> */}
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signup">Signup</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signin">Signin</a>
      </li>   
    </ul>
  </div>
</nav>

        
    )
}

export default NavBar;

// {/* <Link to="/">Home</Link>
// <Link to="/signup">Signup</Link>
// <Link to="/signin">Signin</Link> */}