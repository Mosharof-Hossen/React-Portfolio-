import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const NavbarCreate = () => {
    return (
        // style={{position:"fixed",overflow:"hidden",width:"100%"}}
        <div className ="fixed-top">
            <Navbar style ={{backgroundColor:"rgba(0,0,0,.4)" ,color : "white"}}  expand="lg">
                <Navbar.Brand className="text-white" href="/home"> <p className = "me">Me.</p></Navbar.Brand>
                <Navbar.Toggle style ={{color:"white"}} className="text-white"  aria-controls="basic-navbar-nav" ><span class="fas fa-bars navbar-icon"></span></Navbar.Toggle>
                <Navbar.Collapse className="text-white" id="basic-navbar-nav">
                    <Nav className="ml-auto text-white">

                        <Link className = "mx-2" to="/home"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">HOME</Button></Link>
                        <Link className = "mx-2" to="/project"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">PROJECTS</Button></Link>
                        <Link className = "mx-2" to="/blog"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">BLOG</Button></Link>
                        <Link className = "mx-2" to="/resume"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">RESUME</Button></Link>
                        <Link className = "mx-2" to="/contact"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">CONTACT</Button></Link>
                        
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarCreate;