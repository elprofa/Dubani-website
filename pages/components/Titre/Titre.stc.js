import styled from "styled-components";

export const TitreStc = styled.h1`
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 10px;
    margin-left: 25px;
    display: inline-flex!important;
    width: 26%!important;
    color: ${props => props.color || "#000"};
    
`;

export default TitreStc;