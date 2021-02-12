import React from 'react';
import { Navbar,Form, Nav, NavItem, NavLink } from 'react-bootstrap';
import NavbarStc from './NavBar.stc';
import Hamburger from '../../shared/Hamburger';
import {Container} from "react-bootstrap";
const NavBar = (props) => {
  return (
   
        <NavbarStc variant="dark" collapseOnSelect expand="lg">
           <Container>
              <Navbar.Brand href="#home" >DUBANI</Navbar.Brand>
              <Nav className="ml-auto menu_hamburger">
                  <Hamburger taille="70" />
              </Nav>
            </Container>
        </NavbarStc>
    
  );
}

export default NavBar;