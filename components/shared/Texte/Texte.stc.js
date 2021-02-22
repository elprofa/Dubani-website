import Styled from 'styled-components';

const TexteStc=Styled.p`
    color:${(props)=>props.couleur || "#000000"};
    font-size:${(props)=>props.taille || "14"};
    margin-top:${(props)=>props.marge_haut || "0"};
    margin-bottom:${(props)=>props.marge_bas || "0"};
    text-align:${(props)=>props.alignement || "left"} !important;
    font-style:${(props)=> props.style_font || "normal" };
    font-weight:${(props)=>props.poid_font || "inherit"};
`;
export default TexteStc;