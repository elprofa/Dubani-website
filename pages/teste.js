import React from 'react'
import Titre from './components/Titre';
import SousTitre from './components/SousTitre';
import { Row, Col } from 'reactstrap';
import Menu from './components/MenuHamb';


export default function teste() {
    return (
        <div>
            <Row>
                <Col>
                    <SousTitre color='#000000' texte='Mon titre' />
                    <Titre color='#000000' texte='Mon titre' />
                </Col>

                <Col>
                </Col>
            </Row>
        </div>

    )
}