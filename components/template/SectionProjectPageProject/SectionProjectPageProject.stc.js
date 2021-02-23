import Styled from 'styled-components';

const SectionStc=Styled.section`
    min-height:100vh;
    padding-top:10%;
    @media (max-width: 767px)         
    {
        padding-top:15%;
    }
    @media (max-width: 476px)         
    {
        padding-top:30%;
    }
    .row
    {
        margin:0px;
    }
    .blockProject
    {
        margin:40px 0px;;
    }
`;
export default SectionStc;