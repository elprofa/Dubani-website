import Styled from 'styled-components';
import {Row} from 'reactstrap';

const MoleculeStc=Styled(Row)`
    margin:40px 0px;
    @media (max-width: 767px)         
    {
        margin:0px;
    }
    padding:40px 0px;

`;
export default MoleculeStc;