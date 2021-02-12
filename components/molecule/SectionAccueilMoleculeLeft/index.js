import React from "react";
import { Col, Row, Form, Input } from "reactstrap";
import SectionAccueilMoleculeLeftStc from './SectionAccueilMoleculeLeft.stc';
import Bouton from '../../shared/Bouton';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';
import Hamburger from '../../shared/Hamburger';


const SectionAccueilMoleculeLeft=()=>{
    return(
        <SectionAccueilMoleculeLeftStc>
            <Courbe couleur="#0a2db0" className="CourbeAccueil"/>
            <Hamburger />
            <SousTitre 
                texte="WE DESIGN AND DEVELOP" 
                margeHaut="30px" 
                margeBas="20px" 
                poidFont="400"/>
            <Titre 
                texte="Persuasive websites and " 
                poidFont="700"/>
            <Titre 
                texte="Mobile App " 
                poidFont="700"/>
            <Bouton 
                texte="HIRE US" 
                bg="#0a2db0" 
                couleur="#fff"/>
        </SectionAccueilMoleculeLeftStc>
    )
}

export default SectionAccueilMoleculeLeft;