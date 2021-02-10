import React from 'react';
import Titre from './components/Titre';
import SousTitre from './components/SousTitre';
import { Container, Row, Col } from 'reactstrap';
import Texte from './components/Texte';
import styled from "styled-components";
//import Menu from './components/MenuHamb';



export default function teste() {
    return (
        <div>
            <Container className="themed-container w-100 p-3" background-color="red">
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
        </div>

    )
}