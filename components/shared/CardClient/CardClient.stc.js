import Styled from 'styled-components';
import { Card} from "reactstrap";

const CardClientStc=Styled(Card)`
    background:#fff;
    width:100px;
    display:${props=>props.affichage || "block"};
`;
export default CardClientStc;
