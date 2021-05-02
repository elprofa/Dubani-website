import Styled from 'styled-components';
import {Row} from 'reactstrap';

const MoleculeStc=Styled(Row)`
    margin:40px 0px;
    border-bottom: 1px solid #eaeaea;
    p
    {
        text-align:justify !important;
    }
    @media (max-width: 767px)         
    {
        margin:0px;
    }
    padding:40px 0px;

    .right
    {
        text-align:justify !important;

     p
        {
            text-align:justify !important;
        }
       
    }

    
`;
export default MoleculeStc;