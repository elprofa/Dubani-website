import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SectionClientMoleculeHeadStc from './MoleculeHeadSectionClient.stc';
import SousTitre from '../../shared/SousTitre';
import Titre from '../../shared/Titre';
import Texte from '../../shared/Texte';
import Courbe from '../../shared/CourbeOndulaire';
import {BsArrowRight} from "react-icons/bs";
import {Container,Row, Col} from "reactstrap";

const SectionClientMoleculeHead=()=>{
    return(
        <SectionClientMoleculeHeadStc>
           <Container>
               <Row>
               <Col lg={6} >
                    <Courbe couleur="#527bce" />
                    <SousTitre 
                        texte="NOS" 
                        marge_haut="30px" 
                        marge_bas="20px" 
                        couleur="#fff"
                        poid_font="400"/>
                    <Titre 
                        texte="heureux clients" 
                        couleur="#fff"
                        poid_font="700"/>
                </Col>

            <Col lg={6} className="MonTexte">
                <Texte couleur="#fff" alignement="left" marge_haut="40px">
                Nous faisons de la relation client un atout incontournable dans le 
                développement de notre activité. Développer le portefeuille client  
                avec nos experts est notre atout fondamental, dans la vision que nous
                 nous sommes fixée. nous disposons notre oreille aux clients afin de ressortir 
                 le potentiel exponentiel de la stratégie adaptée.
                 </Texte>
            </Col>
               </Row>
           </Container>
        </SectionClientMoleculeHeadStc>
    )
}
export default SectionClientMoleculeHead;