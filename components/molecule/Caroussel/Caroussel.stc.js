import Styled from 'styled-components';

const CarousselStc=Styled.div`

    width:400px;
    height:300px;
    
    .react-multi-carousel-list>ul>li {

    border-radius: 14px;
    //border-radius:35px !important;
    }

    @media (min-width: 476px) {
        height:400px;
    }
    
    div 
    {
        @media (min-width: 476px) {
            margin-right:40px !important;
        }
    }
`;
export default CarousselStc;