import Styled from 'styled-components';

const MaLigneStc=Styled.div`
    
    width:100%;
    border-bottom:${(props)=>props.epaisseur|| "1px"} solid ${(props)=>props.couleur_bordure || "#ccc"};
    height:20px;
    margin-bottom:${(props)=>props.marge_bas || "inherit"};
    margin-top:${(props)=>props.marge_haut || "inherit"}
`;

export default MaLigneStc;