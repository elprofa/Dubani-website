import styled from 'styled-components';
import { Nav } from 'reactstrap';

const HamburStc = styled(Nav)`

    padding: 0;
    margin: 0;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 

p {
   font-size: 0.75rem;
   letter-spacing: 0.3rem;
   text-transform: uppercase;
  }
  h5 {
      margin-top: 260px;
      font-size: 1.8rem;
      font-weight: 600;
      padding-right: 360px;
    }
.menu-secondary-background-color {
  background-color: black;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
 }
.menu-layer {
 position: relative;
 background: red;
 height: 100%;
 overflow: hidden;
  .menu-city-background {
    top: 0; 
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    }
  }

.hamburger-menu {
      //display: none;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  display: none;
  overflow: hidden;
  .menu-secondary-background-color {
    background-color: black;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    }
    .menu-layer {
    position: relative;
    background: red;
    height: 100%;
    overflow: hidden;
    .menu-city-background {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 0;
      }
    .wrapper {
      margin-top: 0;
      width: 100vw;
            //display: flex;
            //position: relative;
      .menu-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        top: 200px;
        nav {
          display: block;
          ul {
            list-style: none;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            height: 400px;
            padding: 0;
            margin: 0;
            li {
              padding: 18px 10px;
              list-style: none;
              font-size: 6rem;
              font-weight: 700;
              cursor: pointer;
              height: 135px;
              overflow: hidden;
              position: relative;
              width: 700px;
              a {
                position: absolute;
                color: #fff;
                text-decoration: none;
                &:hover {
                  color: black;
                        //background: black;
                    }
                    
                }
            }
        }
    }
  .info {
    color: #fff;
    width: 300px;
    h3 {
      font-size: 1.2rem;
      margin: 8px auto;
      }
    p {
      margin: 0 auto;
      font-size: .8rem;
      color: black;
       display: flex;
      }
  }
}
.locations {
  position: absolute;
  bottom: -50px;
  color: #fff;
  margin-top: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  span {
    cursor: pointer;
    &:first-child 
    {
      margin-left: 64px;
    }
    font-weight: 400;
    margin: 0 32px;
    transition: .3s ease-in-out;
    &:hover 
    {
      color: #fff;
      background: black;
      padding: 8px 24px;
      border-radius: 4px;
    }
  }
 }
}
  }
  }

`;

export default HamburStc;
