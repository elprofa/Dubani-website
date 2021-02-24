import React from "react";
import { Col, Row, Form, Input } from "reactstrap";
import SectionHederLeftJournalStc from './MoleculeLeftHeaderJounal.stc';
import Bouton from '../../shared/Bouton';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';


const SectionJournalMoleculeLeft=()=>{
    return(
        <SectionHederLeftJournalStc>
            <Courbe couleur="#0a2db0" marge_bas="40" className="CourbeAccueil"/>
            <SousTitre 
                texte="OUR" 
                marge_haut="30" 
                marge_bas="20" 
                poid_font="400"/>
            <Titre 
                texte="Journal " 
                poid_font="700"/>
            
        </SectionHederLeftJournalStc>
    )
}

export default SectionJournalMoleculeLeft;