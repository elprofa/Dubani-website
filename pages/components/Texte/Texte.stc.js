import styled from "styled-components";

export const TexteStc = styled.p`
    font-size: smaller;
    padding-bottom: 10px;
    font-weight: 100;
    text-align: justify;
    position: relative; 
    color: ${props => props.color || "#000"};
    
`;
export default TexteStc;