import React from "react";
import MoleculeLeftSectionProjectStc from './MoleculeLeftSectionProject.stc';
import Texte from '../../shared/Texte';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';


const MoleculeLeftSectionProject=()=>{
    return(
        <MoleculeLeftSectionProjectStc>
            <Courbe couleur="#686868" marge_bas="40px" className="CourbeAccueil"/>
            <SousTitre 
                texte="NOS PROJETS" 
                marge_haut="30px" 
                marge_bas="20px" 
                poid_font="400"
                couleur="#fff"
                />
            <Titre 
                texte="Nous n'avons pas de limites " 
                poid_font="700"
                couleur="#fff;"
                />
            <Titre 
                texte="dans tout ce que nous faisons " 
                poid_font="700"
                couleur="#fff"
                />
            <Texte couleur="#fff" marge_haut="20px">
            Nous considérons chaque nouveau projet comme une chance de nous dépasser,
             de proposer quelque chose de mieux, de plus séduisant, de plus innovant.
            Si vous êtes à la recherche de la perfection et du détail qui tue, nos consultants, 
            créatifs et développeurs travaillent main dans la main pour vous offrir une production entièrement intégrée.

            </Texte>
        </MoleculeLeftSectionProjectStc>
    )
}

export default MoleculeLeftSectionProject;