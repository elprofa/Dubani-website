import Styled from 'styled-components';
import { Row} from "reactstrap";

const SectionProductionMoleculeHeadStc=Styled(Row)`
    background:transparent;
    margin-top:40px;
    padding:0px 40px;
    .MonBouton
    {
        text-align:right;
        padding-top:80px;

        & button
        {
            float: right
        }
    }
`;
export default SectionProductionMoleculeHeadStc;