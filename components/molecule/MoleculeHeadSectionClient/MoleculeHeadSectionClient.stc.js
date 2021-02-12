import Styled from 'styled-components';
import { Row} from "reactstrap";

const SectionClientMoleculeHeadStc=Styled(Row)`
    background:transparent;
    .MonTexte
    {
        text-align:right;

        & p
        {
            float: right;
            text-align:right;
        }
    }
`;
export default SectionClientMoleculeHeadStc;