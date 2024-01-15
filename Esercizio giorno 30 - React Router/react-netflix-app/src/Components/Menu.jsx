import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';



export default function Menu() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} className="logo" alt="Logo Netflix" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='link'>Home</Link>
            <Link to="/tvshows" className='link'>TV Shows</Link>
            <Link to="/movies" className='link' >Movies</Link>
            <Link to="/recently-added" className='link'>Recently Added</Link>
            <Link to="/my-list" className='link'>My List</Link>
          </Nav>
          <Nav className='ms-auto'>
          <Link href="#link" className='emoji pb-2 pe-3'><i className="bi bi-search"></i></Link>
          <Link href="#link" className='kids'>KIDS</Link>
          <Link href="#link" className='emoji pb-2 pe-3'><i className="bi bi-bell-fill"></i></Link>
          <Link href="#link" className='emoji pb-2 pe-2'><i className="bi bi-person-fill"></i></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    /*
        <nav
        class="navbar navbar-expand-lg navbar-dark"
        style="background-color: #221f1f"
      >
        <a class="navbar-brand" href="#">
          <img src="assets/logo.png" style="width: 100px; height: 55px" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item active">
              <a class="nav-link font-weight-bold" href="#">TV Shows</a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#">Movies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#">Recently Added</a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#">My List</a>
            </li>
          </ul>
          <i class="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i class="fa fa-bell icons"></i>
          <i class="fa fa-user icons"></i>
        </div>
      </nav>
    */
    
  )
}
