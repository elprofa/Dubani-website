import Styled from 'styled-components';

const TexteStc=Styled.p`
    color:${(props)=>props.couleur || "#000000"};
    font-size:${(props)=>props.taille || "14px"};
    margin-top:${(props)=>props.marge_bas || "0"}px;
`;
export default TexteStc;