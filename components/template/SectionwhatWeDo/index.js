import React from 'react';
import {Row,Col,Container} from "react-bootstrap";
import SectionWhatWeDoStc from './SectionWhatWeDo.stc';
import MoleculeWhatWeDo from '../../molecule/MoleculeWhatWeDo';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';

const WeDo=[
    {chemin:"/img/fpic1.svg",texte:"Marketing Digital"},
    {chemin:"/img/fpic1.svg",texte:"Marketing Digital"},
    {chemin:"/img/fpic1.svg",texte:"Marketing Digital"}
];

const SectionWhatWeDo=()=>{

    return(
        <SectionWhatWeDoStc>
            <Container>
                <Row>
                    <Col lg={6} >
                        <Courbe couleur="#333" />
                        <SousTitre 
                            texte="CE QUE" 
                            marge_haut="30px" 
                            marge_bas="20px" 
                            couleur="#fff"
                            poid_font="400"/>
                        <Titre 
                            texte="nous faisons " 
                            couleur="#fff" 
                            marge_bas="40px"
                            poid_font="700"/>
                    </Col>
                </Row>
                <Row>
                   
                        {
                            WeDo.map((element,index)=> <Col md={4} key={index}><MoleculeWhatWeDo chemin={element.chemin}
                            texte={element.texte} /></Col>)
                        }
                    
                </Row>
            </Container>

        </SectionWhatWeDoStc>
    )
}

export default SectionWhatWeDo;
