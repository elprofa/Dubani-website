import styled from "styled-components";

export const TitreStc = styled.h1`
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 15px;
    position: relative; 
    color: ${props => props.color || "#000"};
    
`;

export default TitreStc;