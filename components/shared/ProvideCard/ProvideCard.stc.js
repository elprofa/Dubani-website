import Styled from 'styled-components';
import {Card} from 'reactstrap';

const ProvideCardStc=Styled(Card)`
    background: #fff;
    height: 250px;
    margin: 15px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:0px;

    &:hover .overlay {
        opacity: 1;
    }

    .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
   
    /* margin-right: 40px; */
        background: #00418f;
        padding:40px;
    }

`;
export default ProvideCardStc;