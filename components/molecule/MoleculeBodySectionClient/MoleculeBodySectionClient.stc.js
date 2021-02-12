import Styled from 'styled-components';
import {Container} from "reactstrap";

const SectionClientMoleculeBody=Styled(Container)`
    padding:10px;
    .row
    {
        padding-left:10px;
        padding-right:10px;
    }
    .col-md-3
    {
        padding-left:5px !important;
        padding-right:5px !important;
    }
`;
export default SectionClientMoleculeBody;