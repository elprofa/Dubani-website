import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SectionClientMoleculeHeadStc from './MoleculeHeadSectionClient.stc';
import SousTitre from '../../shared/SousTitre';
import Titre from '../../shared/Titre';
import Texte from '../../shared/Texte';
import Courbe from '../../shared/CourbeOndulaire';
import {BsArrowRight} from "react-icons/bs";
import { Col} from "reactstrap";

const SectionClientMoleculeHead=()=>{
    return(
        <SectionClientMoleculeHeadStc>
            <Col lg={6} >
                <Courbe couleur="#ccc" />
                <SousTitre 
                    texte="OUR" 
                    marge_haut="30px" 
                    marge_bas="20px" 
                    poid_font="400"/>
                <Titre 
                    texte="HAPPY CLIENT " 
                    poid_font="700"/>
            </Col>

            <Col lg={6} className="MonTexte">
                <Texte couleur="#000">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae porro quod fugit molestias accusantium quasi dolor nostrum, numquam magni veniam, ipsum mollitia, aperiam iste, excepturi! Quasi id, voluptate quod!
		Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Aliquam inventore quasi tempore, voluptatum possimus officia impedit temporibus autem sunt, praesentium iusto quam ut labore excepturi unde sed, cumque officiis voluptas!
                </Texte>
            </Col>
        </SectionClientMoleculeHeadStc>
    )
}
export default SectionClientMoleculeHead;