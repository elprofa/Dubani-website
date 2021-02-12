import React from "react";
import MoleculeLeftSectionProjectStc from './MoleculeLeftSectionProject.stc';
import Texte from '../../shared/Texte';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';


const MoleculeLeftSectionProject=()=>{
    return(
        <MoleculeLeftSectionProjectStc>
            <Courbe couleur="#686868" marge_bas="40" className="CourbeAccueil"/>
            <SousTitre 
                texte="OUR PROJECTS" 
                marge_haut="30" 
                marge_bas="20" 
                poid_font="400"
                couleur="#fff"
                />
            <Titre 
                texte="Persuasive websites and " 
                poid_font="700"
                couleur="#fff;"
                />
            <Titre 
                texte="Mobile App " 
                poid_font="700"
                couleur="#fff"
                />
            <Texte couleur="#686868" marge_haut="20">
                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée
                 à titre provisoire pour calibrer une mise en page, le texte définitif venant 
                 remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                 Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </Texte>
        </MoleculeLeftSectionProjectStc>
    )
}

export default MoleculeLeftSectionProject;