import styled from "styled-components";

export const SousTitreStc = styled.p`
    font-size: 15px;
    text-transform:uppercase!important;
    letter-spacing: 2px;
    padding-bottom: 3px;
    width: auto;
    margin-left: 5px;
    color: ${props => props.color || "#000"};
    
`;

export default SousTitreStc;