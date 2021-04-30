import Styled from 'styled-components';

const sectionAccueilPageAgencyStc=Styled.section`
    background-image:url(/img/network.jpg);
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

    .accueilEl
    {
        background: rgb(0,0,0,.4);
        padding: 20px;
    }
    .soustitre
    {
        font-weight:600px;
    }
`;
export default sectionAccueilPageAgencyStc;