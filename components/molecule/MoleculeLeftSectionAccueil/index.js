import React from "react";
import { Col, Row, Form, Input } from "reactstrap";
import SectionAccueilMoleculeLeftStc from './MoleculeLeftSectionAccueil.stc';
import Bouton from '../../shared/Bouton';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';


const SectionAccueilMoleculeLeft=()=>{
    return(
        <SectionAccueilMoleculeLeftStc>
            <Courbe couleur="#0a2db0" className="CourbeAccueil"/>
            <SousTitre 
                texte="WE DESIGN AND DEVELOP" 
                marge-haut="30" 
                marge-bas="20" 
                poid-font="300"/>
            <Titre 
                texte="Persuasive websites and " 
                poid-font="700"/>
            <Titre 
                texte="Mobile App " 
                poid-font="700"/>
            <Bouton 
                texte="HIRE US" 
                bg="#0a2db0" 
                couleur="#fff"/>
        </SectionAccueilMoleculeLeftStc>
    )
}

export default SectionAccueilMoleculeLeft;