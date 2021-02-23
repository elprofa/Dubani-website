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
                        texte="OUR" 
                        marge_haut="30px" 
                        marge_bas="20px" 
                        couleur="#fff"
                        poid_font="400"/>
                    <Titre 
                        texte="Happy Clients " 
                        couleur="#fff"
                        poid_font="700"/>
                </Col>

            <Col lg={6} className="MonTexte">
                <Texte couleur="#fff" alignement="left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae porro quod fugit molestias accusantium quasi dolor nostrum, numquam magni veniam, ipsum mollitia, aperiam iste, excepturi! Quasi id, voluptate quod!
		        Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Aliquam inventore quasi tempore, voluptatum possimus officia impedit temporibus autem sunt, praesentium iusto quam ut labore excepturi unde sed, cumque officiis voluptas!
                </Texte>
            </Col>
               </Row>
           </Container>
        </SectionClientMoleculeHeadStc>
    )
}
export default SectionClientMoleculeHead;