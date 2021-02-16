import React from 'react';
import OverlayStc from './Overlay.stc';
import Hamburger from '../../shared/Hamburger';
import {Container,Navbar,Nav,Row,Col} from "react-bootstrap";
import ElementMenuHeader from '../../shared/ElementMenuHeader';

const Overlay=(props)=>{

    return(
        <OverlayStc>
            <div id="myNav" className="overlay">
                <div className="overlay-content">
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Brand href="#home" >DUBANI</Navbar.Brand>
                            <Nav className="ml-auto menu_hamburger">
                                wedo
                            </Nav>
                        </Container>
                    </Navbar>

                    <Row>
                        <Col md={4}>
                            <ElementMenuHeader />
                            <ElementMenuHeader />
                        </Col>
                        <Col md={4} className="toRotate">
                            <ElementMenuHeader/>
                        </Col>
                    </Row>
                </div>
            </div>
            <Hamburger taille="70" openNav={props.openNav} />
        </OverlayStc>
    )
}
export default Overlay;