import styled from "styled-components";

export const TexteStc = styled.p`
    font-size: smaller;
    padding-bottom: 10px;
    font-weight:100;
    text-align:left;
    margin-left: 25px;
    width: 19%;
    color: ${props => props.color || "#000"};
    
`;
export default TexteStc;