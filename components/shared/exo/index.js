import React from 'react';
import ExoStc from './Exo.stc'

const Exo=(props)=>{
    const {largeur,alignement,taille,marge_haut,texte, bg, couleur_bordure, couleur, largeur_min, icon } = props;

    return (
        <ExoStc 
        className="skew-button"
        couleur_bordure={couleur_bordure}
        couleur={couleur}
        largeur_min={largeur_min}
        marge_haut={marge_haut} 
        taille={taille} 
        alignement={alignement} 
        largeur={largeur} 
        bg={bg}
        ><span>{texte}{" "}</span>
        
            {icon ? (
                <Badge variant="">
                {" "}
                {icon}
                </Badge>
            ) : (
                ""
            )}{" "}
        </ExoStc>
    )
}
export default Exo;