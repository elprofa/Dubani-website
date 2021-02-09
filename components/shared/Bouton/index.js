import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Badge } from "reactstrap";
import BoutonStc from "./Bouton.stc";


const Bouton = (props) => {
  const { texte, bg, couleurBordure, couleur, largeurMin, icon } = props;
  return (
    <BoutonStc
      variant="primary"
      couleurBordure={couleurBordure}
      couleur={couleur}
      largeurMin={largeurMin}
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
