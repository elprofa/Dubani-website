import styled from "styled-components";

export const TitreStc = styled.h1`
    font-size: 30px;
    font-weight: 800;
    padding-bottom: 20px;
    display: inline-flex!important;
    width: 79%!important;
    color: ${props => props.color || "#000"};
    
`;

export default TitreStc;