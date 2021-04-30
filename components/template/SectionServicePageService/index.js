import React from 'react';
import ServiceStc from './SectionServicePageService.stc';
import MoleculeService from '../../molecule/MoleculeServicePageService';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';
import {Container,Row,Col} from 'reactstrap';



const SectionService=()=>{

    
const services=[
    
    {
        titre:"WEB DESIGN",
        picture:"/img/Dubani_Agency_Web-Design-3.jpg",
        position:"right",
        description:"Pourquoi faire appel à DUBANI AGENCE web ?"+
        "Il existe aujourd’hui des solutions de création simplifiées avec 1&1 ou Wix par exemple. Ce principe de création peut être adapté pour "+
        "les personnes ayant des facilités en informatique, en retouche d’images et avec une bonne culture web.L'expertise de DUBANI nous laisse "+
        "sans voix dans ce secteur.Pour tous les autres, il est préférable de confier la création de son site à des professionnels de DUBANI AGENGE "+
        "pour obtenir un résultat à la hauteur de ses espérances.Passer par une agence web vous permettra d’avoir des conseils concernant les fonctionnalités, "+
        "l’ergonomie, le design et le référencement de votre site web. Elle s’occupera de votre site dans son intégralité, elle pourra même vous proposer de réaliser "+
        "votre communication papier ou encore la création de votre logo.Cela vous permettra également d’avoir un seul interlocuteur et votre projet avancera plus "+
        "rapidement.Faire appel à une web agency, c’est l’assurance d’obtenir un résultat qualitatif et conforme à vos exigences, le tout en respectant un échéancier "+
        "approuvé conjointement. nous répondons à vos besoins."
    },
    {
        titre:"WEB & MOBILE DEVELOPMENT",
        picture:"/img/Dubani_Agency_Developpement-mobil.jpg",
        position:"left",
        description:"Notre agence web conçoit de belles applications mobiles et des interfaces utilisateurs réactives. Nous développons des "+
        "applications pour tout type d'activités et nous collaborons ainsi à la transformation de vos idées  en réalité. Nous utilisons les "+
        "technologies digitales les plus récentes pour concevoir  vos Apps ios et Android. Applications mobiles hybrides ou natives , nous nous "+
        "proposons  la technologie adaptée à vos objectifs et à votre budget. En tant qu’agence de développement d'applications mobiles de premier "+
        "plan , nous prenons plaisir à mettre notre expertise et notre expérience au service de vos projets numériques. Nous sommes aussi force de "+
        "proposition pour l’optimisation de vos idées et disposons de compétences très pointues pour la conception de solutions mobiles performantes."
    },
      {
          titre:"MARKETING DIGITAL",
          picture:"/img/Dubani_Agency-marketing-video-1.jpg",
          position:"right",
          description:"Le marketing désigne l’ensemble des actions qui ont pour objectif de prévoir, de connaître, de stimuler les besoins "+
          "des consommateurs à l’égard des biens et des services et enfin d’adapter la production et la commercialisation aux besoins ainsi "+
          "précisés.Le marketing digital également couramment appelé marketing numérique désigne l'ensemble des techniques marketing utilisées "+
          "sur les supports et canaux digitaux. Le marketing digital recouvre essentiellement les applications marketing liées à l'Internet "+
          "traditionnel, mais également celles liées aux téléphones mobiles, tablettes, GPS et autres applications et objets connectés. "+
          "Le marketing mobile (sites mobiles + applications mobiles) y prend une place de plus en plus importante. C'est pour cette raison que "+
          "l'équipe DUBANI AGENCE toujours à la recherche des informations nouvelles s'adapte à l'évolution numérique en proposant à nos clients "+
          "des solutions adaptées. notamment l’email marketing et la présence booster via les réseaux sociaux.l’email marketing est L’email "+
          "marketing consiste à informer et fidéliser et une base de contacts intéressés par nos produits ou services et à générer des ventes en "+
          "les incitant à visiter des pages spécifiques de notre site. il rempli trois principaux objectifs notamment en notoriété "+
          " ‘(nous faire connaître) en image (nous positionner en tant qu’expert et action (vendre vos produit et service).L’email intervient ainsi "+
          "à chaque étape de la relation client : au stage informatif et de prospection, au moment de la conversion, mais aussi plus tard pour la "+
          "fidélisation. En ce qui concerne la présence sur les réseaux sociaux nous permet aussi d’atteindre un plus grand nombre."
       }
       ,
       {
           titre:"REFERENCEMENT",
           picture:"/img/Dubani_Agency-SEO-1.jpg",
           position:"left",
           description:"Nous vous accompagnons tout au long de votre projet sur les différentes problématiques liées au SEO. Idéalement nous "+
           "intervenons en amont de votre projet."+
           "L’expertise technique des artisans de DUBANI AGENCE  nous permet d’échanger avec tous les acteurs de votre projet."+
           "Adapter notre discours rend notre approche SEO compréhensible par tous car nous comprenons les problématiques de chacun au "+
           "quotidien."+
           "Notre approche du SEO est à la fois technique, globale, marketing et indubitablement « humaine »."
           
        }
         
    
]

    return (
        <ServiceStc>
            <Container>
                <Row>
                    <Col md={12}>
                    <Courbe couleur="#ccc" marge_bas="40px" className="CourbeAccueil" />
                        <SousTitre 
                            texte="AIRE D’EXPERTISE" 
                            marge_haut="30px" 
                            marge_bas="20px" 
                            poid_font="400"/>
                        <Titre 
                            texte="Services " 
                            poid_font="700"/>
                    </Col>
                </Row>
                {
                    services.map((service,index)=>
                        <MoleculeService 
                        key={index}
                        titre={service.titre} 
                        position={service.position}
                        picture={service.picture} 
                        description={service.description}
                        />
                    )
                }
                
            </Container>
        </ServiceStc>
    )
}
export default SectionService;