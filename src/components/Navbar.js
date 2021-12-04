import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="/" className="navbar-brand" to="/">
              Sigaram News - Explore By Country
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link className="active btn btn-primary mx-2" style={{backgroundColor:'#301b5e'}} aria-current="page" to="/">
                    Home/IN
                  </Link>
                </li>
                {/* <li className="nav-item"><Link className="nav-link" to="/">About</Link></li> */}
                <li className="nav-item"><Link className="btn btn-primary mx-1" style={{backgroundColor:'#142d41'}} to="/ae">AE</Link></li>
                <li className="nav-item"><Link className="btn btn-primary mx-1" style={{backgroundColor:'#142d41'}} to="/sa">SA</Link></li>
                <li className="nav-item"><Link className="btn btn-primary mx-1" style={{backgroundColor:'#142d41'}} to="/us">USA</Link></li>
                <li className="nav-item"><Link className="btn btn-primary mx-1" style={{backgroundColor:'#142d41'}} to="/at">AT</Link></li>
                <li className="nav-item"><Link className="btn btn-primary mx-1" style={{backgroundColor:'#142d41'}} to="/ar">AR</Link></li>
                <li className="nav-item"><Link className="btn btn-primary mx-1" style={{backgroundColor:'#142d41'}} to="/nz">NZ</Link></li>
                </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
