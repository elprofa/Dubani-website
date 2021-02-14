import React from 'react';
import {Row,Col,Container} from "react-bootstrap";
import SectionWhatWeDoStc from './SectionWhatWeDo.stc';
import MoleculeWhatWeDo from '../../molecule/MoleculeWhatWeDo';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';

const SectionWhatWeDo=()=>{

    return(
        <SectionWhatWeDoStc>
            <Container>
                <Row>
                    <Col lg={6} >
                        <Courbe couleur="#527bce" />
                        <SousTitre 
                            texte="WHAT" 
                            marge_haut="30px" 
                            marge_bas="20px" 
                            couleur="#fff"
                            poid_font="400"/>
                        <Titre 
                            texte="WE ARE DO " 
                            couleur="#fff"
                            poid_font="700"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <MoleculeWhatWeDo />
                    </Col>
                </Row>
            </Container>

        </SectionWhatWeDoStc>
    )
}

export default SectionWhatWeDo;
