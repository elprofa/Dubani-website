import React from 'react'
import Titre from './components/Titre';
import SousTitre from './components/SousTitre';
import { Row, Col } from 'reactstrap';
import Texte from './components/Texte';
//import Menu from './components/MenuHamb';


export default function teste() {
    return (
        <div>
            <Row>
                <Col>
                    <SousTitre color='#000000' texte='Mon titre' />
                    <Titre color='#000000' texte='Mon titre' />
                    <Texte color='#000000' texte="Mon texte de teste pour voir l'affichage" />
                </Col>

                <Col>
                </Col>
            </Row>
        </div>

    )
}