import Styled from 'styled-components';
import {Card} from 'reactstrap';

const TeamStc=Styled(Card)`
    height:300px;
    border-radius:0px;
    text-align:center;
    padding:20px;
    border:0px;
    .pictureTeam div
    {
        position:relative !important;
        height: 160px;
        width: 160px;
        margin: auto !important;
        border: 1px solid #ccc;
        background:#ccc;
        border-radius: 100%;
    }

    .soustitre
    {
        color: #2d519d !important;
        font-weight: 600 !important;
    }
    p
    {
        text-align:center !important;
        margin-top:0px !important;

    }
`;
export default TeamStc;