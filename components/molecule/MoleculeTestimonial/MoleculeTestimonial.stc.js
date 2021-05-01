import Styled from 'styled-components';

const MoleculeTestimonialStc=Styled.div`
    width:100%;
    display:block;
    margin:80px auto;
    text-align:center;

    .carousel-caption
    {
        position:relative !important;
        right:0px !important;
        left:0px !important;
        margin:auto;
        width:80%;
    }

    .carousel-item p 
    {
        @media (max-width: 767px) {
           font-size:16px !important;
        }
    }
`;

export default MoleculeTestimonialStc;