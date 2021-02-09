import Styled from 'styled-components';

const MaLigneStc=Styled.div`
    
    width:100%;
    border-bottom:${(props)=>props.epaisseur|| "1"}px solid ${(props)=>props.couleurBordure || "#ccc"};
    height:20px;
`;

export default MaLigneStc;