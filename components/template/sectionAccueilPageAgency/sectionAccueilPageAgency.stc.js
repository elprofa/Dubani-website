import Styled from 'styled-components';

const sectionAccueilPageAgencyStc=Styled.section`
    background-image:url(/img/agency.jpg);
    background-size:cover;
    height:100vh;
    padding-top:15%;
    @media (max-width: 767px)         
    {
        padding-top:15%;
    }
    @media (max-width: 476px)         
    {
        padding-top:30%;
    }
`;
export default sectionAccueilPageAgencyStc;