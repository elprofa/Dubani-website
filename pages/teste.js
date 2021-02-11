import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titre from './components/Titre';
import SousTitre from './components/SousTitre';
import { Container, Row, Col } from 'reactstrap';
import Texte from './components/Texte';
import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";//import ImLinkedin2 from 'react-icons/ImLinkedin2';
//import Menu from './components/MenuHamb';
//import ControlledCarousel  from './components/Testimonial';
import Testimonial from './components/Testimonial';


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
                    <Col lg={3} className='ml-5'>
                            
                        </Col>
                        <Col lg={3} className='ml-5'>
                            
                        </Col>
                        <Col lg={3} className='ml-5'>
                            <FaFacebookF className='icons d-flex justify-content-end' size={18} className='ml-4' style={{background: 'red'}, {borderRadius: '50%'}, {color: 'rede'}}/>
                            <FaInstagram className='icons d-flex justify-content-end' size={20} className='mx-4' />
                            <FaLinkedinIn className='icons d-flex justify-content-end' size={20} className='mr-2' color='blue' />
                            
                        </Col>
                    </Row>
                   
                </Container>
                <Container>
                    <Row >
                        <Col lg={5} className='d-flex- m-2 vh-50 vw-50'> 
                            <SousTitre className='m-2 vh-100' color='#000000' texte='our projets' />
                            <Titre className='d-inline-flex' color='#000000' texte='Unique Creations From The Workshop' />
                            <Texte className='d-inline-flex' color='#9a9898' texte='Belle Epoque is a digital agenvy based in Paris. We help you all the stages of the realization of you digital projet: strategy, design, web development, communication and seo.' />
                        </Col>

                        <Col lg={5} className='ml-2 vh-50'>
                            Bloc text et img
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={1}>
                        </Col>

                        <Col lg={8}>
                            <Testimonial className='vw-100 vh-40'/>
                        </Col>
                        <Col lg={1}>

                        </Col>
                    </Row>
                </Container>
            </Container>
        

    )
}