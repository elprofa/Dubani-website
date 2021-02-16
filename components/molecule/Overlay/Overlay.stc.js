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

    overflow-y: scroll;

  @media (min-width: 996px)
    {
        overflow-y: hidden;
    }
  
  
  transition: 1s; 
}

.icon_close
{
    font-size: 40px;
    color: #fff;
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
.row
{
    margin:0px;
    width:100%;
}
.left
{
    & .card
    {
        
        @media (min-width: 996px)
        {
            margin-right:30px;
        }
    }
}
.right
{
    & .card
    {
        @media (min-width: 996px)
        {
            margin-left:30px;
        }
        

    }
}
.toRotate
{
    text-align: left;
    /* width: 100%; */

    @media (min-width: 996px)
    {
        transform: rotate( 90deg);
    }
    
    & .card
    {
       
        @media (min-width: 996px)
        {
            position: relative;
            bottom: -24%;
            height: 53%;
            width: 407px;
            left: -136px;
        }
        @media (min-width: 996px) and (max-width:1200px)         
        {
            position: relative;
            bottom: -24%;
            height: 53%;
            width: 370px;
            left: -133px;
        }
    }
}

`;
export default OverlayStc;