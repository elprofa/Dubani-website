import Styled from 'styled-components';

const TexteStc=Styled.p`
    color:${(props)=>props.couleur || "#000"};
    font-size:${(props)=>props.taille || "14px"};
`;
export default TexteStc;