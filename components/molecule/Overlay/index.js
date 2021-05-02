import React from 'react';
import OverlayStc from './Overlay.stc';
import Hamburger from '../../shared/Hamburger';
import {Container,Navbar,Nav,Row,Col} from "react-bootstrap";
import ElementMenuHeader from '../../shared/ElementMenuHeader';
import { BsX } from "react-icons/bs";
import MonImage from '../../shared/MonImage';

const Overlay=(props)=>{

    return(
        <OverlayStc>
            <div id="myNav" className="overlay">
                <div className="overlay-content">
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Brand href="/" > <MonImage chemin="/img/logoV.svg" largeur="100" hauteur="100" /></Navbar.Brand>
                            <Nav onClick={props.closeNav} className="ml-auto menu_hamburger">
                                <BsX className="icon_close" />
                            </Nav>
                        </Container>
                    </Navbar>

                   <Container>
                        <Row>
                            <Col lg={5} md={12} className="left">
                                <ElementMenuHeader cliquer={props.closeNav} lien="/agency" texte="AGENCE" />
                                <ElementMenuHeader cliquer={props.closeNav} lien="/project" texte="PROJECT"/>
                            </Col>
                             <Col lg={2} md={12} className="toRotate">
                                <ElementMenuHeader cliquer={props.closeNav} lien="/service" texte="SERVICES"/>
                            </Col>
                            <Col lg={5} md={12} className="right">
                                <ElementMenuHeader cliquer={props.closeNav} lien="#" texte="JOURNAL"/>
                                <ElementMenuHeader cliquer={props.closeNav} lien="/contact" texte="CONTACT"/>
                            </Col>
                        </Row>
                   </Container>
                </div>
            </div>
            <Hamburger taille="70" openNav={props.openNav} />
        </OverlayStc>
    )
}
export default Overlay;