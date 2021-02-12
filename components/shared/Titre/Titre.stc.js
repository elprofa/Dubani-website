import React from 'react';
import Styled from 'styled-components';
const TitreStc=Styled.h1`
    color:${(props)=>props.couleur || "#000"};
    font-size:${(props)=>props.taille || "40px"};

    font-weight:${(props)=>props.poid_font || "600"};
`;
export default TitreStc;