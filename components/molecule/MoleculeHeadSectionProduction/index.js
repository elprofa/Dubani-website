import React from 'react';
import SectionProductionMoleculeHeadStc from './MoleculeHeadSectionProduction.stc';
import SousTitre from '../../shared/SousTitre';
import Titre from '../../shared/Titre';
import MonBouton from '../../shared/Bouton';
import Courbe from '../../shared/CourbeOndulaire';
import {BsArrowRight} from "react-icons/bs";
import { Col} from "reactstrap";

const SectionProductionMoleculeHead=()=>{
    return(
        <SectionProductionMoleculeHeadStc>
            <Col lg={6} >
                <Courbe couleur="#ccc" />
                <SousTitre 
                    texte="OUR LAST" 
                    marge_haut="30px" 
                    marge_bas="20px" 
                    poid_font="400"/>
                <Titre 
                    texte="Productions " 
                    poid_font="700"/>
            </Col>

            <Col lg={6} className="MonBouton">
                <MonBouton texte="MORE PROJECTS" bg="transparent" marge_haut="80px" couleur="#000" icon={<BsArrowRight />} />
            </Col>
        </SectionProductionMoleculeHeadStc>
    )
}
export default SectionProductionMoleculeHead;