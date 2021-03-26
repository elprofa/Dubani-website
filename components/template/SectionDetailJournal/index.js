import React from 'react';
import JournalStc from './SectionDetailJournal.stc';
import Texte from '../../shared/Texte';
import SousTitre from '../../shared/SousTitre';
import MonImage from '../../shared/MonImage';
import {Container,Row,Col} from 'reactstrap';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa';


const SectionService=()=>{


    return (
        <JournalStc>
            <Container>
                <Row>
                    <Col md={12}>
                        <Texte marge_bas="20px" taille="16px" marge_haut="20px" alignement="justify">
                            Le lorem ipsum est, en 
                        </Texte>

                        <SousTitre 
                            texte="Le lorem ipsum est, en imprimerie, une suite de mots " 
                            marge_haut="20px" 
                            taille="30px"
                            marge_bas="40px" 
                            poid_font="600"/>

                    </Col>
                    <Col md={12} className="thumbnail">
                        <MonImage chemin="/img/office.jpg" />
                    </Col>
                    <div className="shareIcon">
                        <span >
                        <FaFacebookF className='' /> 
                        </span>
                        <span >
                        <FaLinkedinIn /> 
                        </span>
                        <span>
                        <FaTwitter/> 
                        </span>
                        <span>
                        <FaInstagram />
                        </span>
                    </div>
                    <Col md={12}>
                    <Texte marge_bas="20px" marge_haut="50px" alignement="justify" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <br/><br/>
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vero, assumenda beatae consequuntur culpa ut molestias tenetur atque, expedita, tempore consequatur sed consectetur numquam deserunt laudantium adipisci enim unde ratione!
                    Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Iure magni magnam amet eos fuga aliquam, est architecto deleniti ullam in distinctio ipsam provident odio vel. Dolorem error ducimus deleniti voluptatum?
                    Lorem ipsum dolor sit amet consectetur adipisicing, elit. Eligendi, qui, architecto corrupti magni numquam obcaecati minus necessitatibus itaque eius eveniet temporibus non et nisi cum veritatis quas magnam dignissimos modi!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.<br/><br/>
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vero, assumenda beatae consequuntur culpa ut molestias tenetur atque, expedita, tempore consequatur sed consectetur numquam deserunt laudantium adipisci enim unde ratione!
                    Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Iure magni magnam amet eos fuga aliquam, est architecto deleniti ullam in distinctio ipsam provident odio vel. Dolorem error ducimus deleniti voluptatum?
                    Lorem ipsum dolor sit amet consectetur adipisicing, elit. Eligendi, qui, architecto corrupti magni numquam obcaecati minus necessitatibus itaque eius eveniet temporibus non et nisi cum veritatis quas magnam dignissimos modi!
                        </Texte>
                    </Col>

                </Row>
               
            </Container>
        </JournalStc>
    )
}
export default SectionService;