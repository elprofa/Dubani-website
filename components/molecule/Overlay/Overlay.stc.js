import Styled from 'styled-components';
import {Container} from 'reactstrap';

const OverlayStc=Styled.div`

.overlay {
  height: 0;
  width: 100%;
  position: fixed; 
  z-index: 9999; 
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0, 1);
  overflow-y: hidden;
  transition: 1s; 
}

.overlay-content {
  position: relative;
  top: 0; 
  width: 100%;
  text-align: center; 
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; 
  transition: 0.3s; 
}
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}


@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

.toRotate
{
    transform: rotate( 90deg);
    /* width: 100%; */
    text-align: left;
    & .card
    {
        position: relative;
        bottom: -58%;
    }
}

`;
export default OverlayStc;