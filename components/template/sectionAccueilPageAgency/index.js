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
                            texte="VOTRE MEILLEUR PARTENAIRE DIGITAL ET WEB MARKETING" 
                            marge_haut="30px" 
                            marge_bas="40px" 
                            poidFont="400"/>
                        <Titre 
                            texte="Nous sommes honorer de fournir
                            " 
                            poidFont="700"/>
                        <Titre 
                            texte="un numérique de premier ordre et
                            " 
                            poidFont="700"/>
                        <Titre 
                            texte="des services média de qualité
                            " 
                            poidFont="700"/>
                        
                    </Col>
                </Row>
            </Container>
        </AccueilStc>
    )
}

export default SectionAccueilPageAgency;