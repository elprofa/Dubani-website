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
                    <Col lg={8} className="accueilEl">
                        <SousTitre 
                            texte="VOTRE MEILLEUR PARTENAIRE DIGITAL ET WEB MARKETING" 
                            couleur="#64c5ea"
                            marge_haut="30px" 
                            marge_bas="40px" 
                            poid_font="600"/>
                        <Titre 
                            texte="Nous sommes honorés de fournir
                            " 
                            couleur="#fff"
                            poidFont="700"/>
                        <Titre 
                            texte="un numérique de premier ordre et
                            " 
                            couleur="#fff"
                            poidFont="700"/>
                        <Titre 
                            texte="des services médias de qualité
                            " 
                            couleur="#fff"
                            poidFont="700"/>
                        
                    </Col>
                </Row>
            </Container>
        </AccueilStc>
    )
}

export default SectionAccueilPageAgency;