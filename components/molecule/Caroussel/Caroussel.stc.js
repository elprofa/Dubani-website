import Styled from 'styled-components';

const CarousselStc=Styled.div`

    width:400px;
    height:200px;
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