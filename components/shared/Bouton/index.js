import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Badge } from "reactstrap";
import BoutonStc from "./Bouton.stc";


const Bouton = (props) => {
  const {marge_gauche,marge_droite,bg_after,largeur,alignement,taille,marge_haut,texte, bg, couleur_bordure, couleur, largeur_min, icon } = props;
  return (
    <BoutonStc
      className="skew-button"
      variant="primary"
      bg_after={bg_after}
      couleur_bordure={couleur_bordure}
      couleur={couleur}
      largeur_min={largeur_min}
      marge_haut={marge_haut} 
      taille={taille} 
      alignement={alignement} 
      largeur={largeur} 
      marge_gauche={marge_gauche} 
      marge_droite={marge_droite} 
      bg={bg}
    >
      <i>{texte}{" "}</i>
        
        {icon ? (
            <Badge variant="">
            {" "}
            {icon}
            </Badge>
        ) : (
            ""
        )}{" "}
    </BoutonStc>
  );
};

export default Bouton;
