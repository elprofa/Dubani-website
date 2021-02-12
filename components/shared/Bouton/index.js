import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Badge } from "reactstrap";
import BoutonStc from "./Bouton.stc";


const Bouton = (props) => {
  const { texte, bg, couleur_bordure, couleur, largeur_min, icon } = props;
  return (
    <BoutonStc
      variant="primary"
      couleur_bordure={couleur_bordure}
      couleur={couleur}
      largeur_min={largeur_min}
      bg={bg}
    >
      {texte}{" "}
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
