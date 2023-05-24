import React from 'react';
import Klassy_logo from '../../images/klassy-logo.png';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { useNavigate, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar1.css';
import '.././overAllCss.css';


const Navbar1 = () => {
        const navigate = useNavigate();

    const PageChange = () => { 
        navigate("/register");
    }
    const Home = () => { 
        navigate("/");
    }
    const About = () => { 
        navigate("/about");
    }
    const Contact = () => { 
        navigate("/contact");
    }
    const Chefs = () => {
        navigate("/chefs");
    }
    return (

        <div className='Navbar'>
            <div className="Section1_1"  >
                <div className='Head_nav'>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <div>
                                <Navbar.Brand href="#home">
                                    <img className='image' width="100%" height="100%" src={Klassy_logo} alt=""></img>
                                </Navbar.Brand>
                            </div>

                            <Navbar.Toggle className='Toggle' aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto Toggle">
                                    <Nav.Link onClick={Home} className='NavLink'>Home</Nav.Link>
                                    <Nav.Link onClick={About}  className='NavLink'>About</Nav.Link>
                                    <Nav.Link className='NavLink' href="#link">Menu</Nav.Link>
                                    <Nav.Link className='NavLink' onClick={Chefs}>Chefs</Nav.Link>
                                    <NavDropdown className='NavLink dropDown' title="Items" id="basic-nav-dropdown">
                                            <NavDropdown.Item className='dropDownItem' href="#action/3.1">Features</NavDropdown.Item>
                                        <NavDropdown.Item className='dropDownItem' href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className='dropDownItem' href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className='dropDownItem' href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link className='NavLink' onClick={Contact}>Contact Us</Nav.Link>
                                    <Nav.Link className='NavLink Ex_login'  onClick={PageChange} >Login/Logout</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
            <div className="Section1_2">
                <NavLink className="button Inlogin" onClick={PageChange} >Login/Logout</NavLink>

            </div>
         
        </div>
    )
}
export default Navbar1;
