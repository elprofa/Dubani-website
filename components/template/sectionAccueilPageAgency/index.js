import React from 'react';
import AccueilStc from './sectionAccueilPageAgency.stc';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';
import {Container,Row,Col} from 'reactstrap';

const SectionAccueilPageAgency=()=>{
    return (
        <AccueilStc>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SousTitre 
                            texte="YOUR PARTNER IN DIGITAL" 
                            marge_haut="30px" 
                            marge_bas="40px" 
                            poidFont="400"/>
                        <Titre 
                            texte="We Pride Ourselves By " 
                            poidFont="700"/>
                        <Titre 
                            texte="Providing Top-Notch Digital " 
                            poidFont="700"/>
                        <Titre 
                            texte="Media services " 
                            poidFont="700"/>
                    </Col>
                </Row>
            </Container>
        </AccueilStc>
    )
}

export default SectionAccueilPageAgency;