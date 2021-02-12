import Styled from 'styled-components';
const SousTitreStc=Styled.h1`
    color:${(props)=>props.couleur || "#000"};
    font-size:${(props)=>props.taille || "20"}px;
    font-weight:${(props)=>props.poid_font || "500"};
    margin-top:${(props)=>props.marge_haut || "5"}px;
    margin-bottom:${(props)=>props.marge_bas || "5"}px;
`;
export default SousTitreStc;