import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titre from './components/Titre';
import SousTitre from './components/SousTitre';
import { Container, Row, Col } from 'reactstrap';
import Texte from './components/Texte';
import styled from "styled-components";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
//import { ImFacebook } from 'react-icons/ImFacebook';
//import FiInstagram from 'react-icons/FiInstagram';
//import ImLinkedin2 from 'react-icons/ImLinkedin2';
//import Menu from './components/MenuHamb';
//import ControlledCarousel  from './components/Testimonial';
//import Testimonial from './components/Testimonial';



export default function teste() {
    return (
        
            <Container className="themed-container w-100 p-1" background-color="red">
                <Container>
                    <Row>
                        <Col lg={5} className='d-flex- m-2 vh-35 vw-75'> 
                            <SousTitre className='m-2' color='#000000' texte='we design and develop' />
                            <Titre className='d-inline-flex' color='#000000' texte='Persuasive Websites And Mobile Apps' />
                            <Texte className='d-inline-flex' color='#9a9898' texte='Belle Epoque is a digital agenvy based in Paris. We help you all the stages of the realization of you digital projet: strategy, design, web development, communication and seo.' />
                        </Col>
                        <Col lg={5} className='m-2'>
                            Bloc text et img
                        </Col>
                    </Row>
                    <Row>
                        
                        <Col lg={12} className='ml-5'>
                            <FaFacebookSquare className='d-flex-end-nowrap' size={25} className="ml-5" />
                        </Col>
                    </Row>
                   
                </Container>
                <Container>
                    <Row >
                        <Col lg={5} className='d-flex- m-2 vh-100 vw-50'> 
                            <SousTitre className='m-2 vh-100' color='#000000' texte='our projets' />
                            <Titre className='d-inline-flex' color='#000000' texte='Unique Creations From The Workshop' />
                            <Texte className='d-inline-flex' color='#9a9898' texte='Belle Epoque is a digital agenvy based in Paris. We help you all the stages of the realization of you digital projet: strategy, design, web development, communication and seo.' />
                        </Col>

                        <Col lg={5} className='m-2 vh-100'>
                            Bloc text et img
                        </Col>
                        <Col lg={6} className='m-2 vh-100'>
                            Bloc text et img
                        </Col>
                        <Col lg={6} className='m-2 vh-100'>
                            Bloc text et img
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        testi
                    </Row>
                </Container>
            </Container>
        

    )
}