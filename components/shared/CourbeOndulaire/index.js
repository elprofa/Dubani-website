import React from 'react';

import CourbeStc from './CourbeOndulaire.stc';

const CourbeOndulaire=(props)=>{
    return (
        <CourbeStc className="courbe" marge={props.marge} couleur={props.couleur} marge_bas={props.marge_bas}>
           {/* <div id="infinity"></div> */}
           <span className="one" >~</span>
           <span className="two">~</span>
           <span className="three">~</span>
           <span className="four">~</span>
           {/* <div className="wedo center"></div>
           <div className="wedo right"></div>
           <div className="wedo center next"></div>
           <div className="wedo left next1"></div>
           <div className="wedo center next2"></div>
           <div className="wedo right next3"></div> */}
        </CourbeStc>
    )
}

export default CourbeOndulaire;