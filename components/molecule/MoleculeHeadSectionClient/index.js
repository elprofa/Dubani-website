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
                        texte="LES CLIENTS DE NOTRE AGENCE DIGITALE" 
                        marge_haut="30px" 
                        marge_bas="20px" 
                        couleur="#fff"
                        poid_font="400"/>
                    <Titre 
                        texte="Ils sont satisfaits" 
                        couleur="#fff"
                        poid_font="700"/>
                </Col>

            <Col lg={6} className="MonTexte">
                <Texte couleur="#fff" alignement="left" marge_haut="40px">
                Notre agence digitale fait de la relation client un atout incontournable dans le 
                développement de son activité. Développer le portefeuille client  
                avec nos experts est son atout fondamental, dans la vision qu'elle
                 s'est fixée. Notre agence digitale dispose son oreille aux clients afin de ressortir 
                 le potentiel exponentiel de la stratégie adaptée.
                 </Texte>
            </Col>
               </Row>
           </Container>
        </SectionClientMoleculeHeadStc>
    )
}
export default SectionClientMoleculeHead;