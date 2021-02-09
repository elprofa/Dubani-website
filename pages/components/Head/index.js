import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { withRouter, BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderStc from './Header.stc';
import Hamburger from '../HamburgerMenu';


const Header = ({ history }) => {
//State du boutton menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
//State pour disabled boutton 
  const [disabled,setDisabled] =useState(false);
  
  // Effets transition 
  //useEffect(() => {
    //listen pour changer de page
    //history.listen(() => {
    //setState({ clicked: false, menuName: 'Menu'});
    //});
  //});

  const handleMenu = () => {
    disableMenu();
    if(state.initial === false) {
      setState({
        initial: false,
        clicked: true,
        menuName: "Close"
      });

    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu'
      });

    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close'
      });

  }
};

//Determine si le boutton doit être desactiver
const disableMenu = () => {
  setDisabled(!disabled);
  setTimeout(() => {
    setDisabled(false);
  }, 1200);
};

return (
    <HeaderStc>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <a href="#">HAMBRG.</a>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </HeaderStc>
);
};

export default Header;