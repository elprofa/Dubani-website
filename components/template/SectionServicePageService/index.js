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
        titre:"Direction artistique",
        picture:"/img/fpic1.svg",
        position:"left",
        description:"Nous vous assurons la conception et la réalisation artistique de votre "+
        "projet tout en travaillant ensemble pour déceler la bonne idée de votre projet."+
        "Là où la création graphique permet de matérialiser et de visualiser des concepts, la direction artistique "+
        "indique dans quelle voie aller. C’est pour cela que cette dernière vient avant la phase de création."+
        "La direction artistique peut être considérée comme le travail préparatoire de la création graphique."+
        "En effet, tandis que la création graphique traduit en images les messages d’une organisation donnée, la direction artistique "+
        "indique la manière dont les messages vont être véhiculés et de quelle manière, à travers la création graphique. Nous sommes à votre disposition."
    },
    {
        titre:"web design ",
        picture:"/img/fpic1.svg",
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
        titre:"papeterie",
        picture:"/img/fpic1.svg",
        position:"left",
        description:"En plus de la réalisation de webdesign, nous sommes de grands amoureux du papier de qualité et des belles "+
        "polices de caractères. Nous réalisons des cartes de visites, des papiers à en-tête, des brochures, etc."
    }
    ,
    {
        titre:"letterpress",
        picture:"/img/fpic1.svg",
        position:"right",
        description:"Le letterpress (ou « Impression typographique » en français) est l’art d’imprimer mécaniquement des formes en relief dans "+
        "du papier. C’était la technique d’impression la plus répandue. DUBANI AGENCE confectionne et réalise tous les documents que l’on veut "+
        "exceptionnels, de grande qualité et intemporels, comme les faire-part, les cartes de visite ou les affiches, car son procédé artisanal "+
        "permet une qualité incomparable tout de suite reconnaissable."
     }
    ,
    {
        titre:"Développement mobile",
        picture:"/img/fpic1.svg",
        position:"left",
        description:"Notre agence web conçoit de belles applications mobiles et des interfaces utilisateurs réactives. Nous développons des "+
        "applications pour tout type d'activités et nous collaborons ainsi à la transformation de vos idées  en réalité. Nous utilisons les "+
        "technologies digitales les plus récentes pour concevoir  vos Apps ios et Android. Applications mobiles hybrides ou natives , nous nous "+
        "proposons  la technologie adaptée à vos objectifs et à votre budget. En tant qu’agence de développement d'applications mobiles de premier "+
        "plan , nous prenons plaisir à mettre notre expertise et notre expérience au service de vos projets numériques. Nous sommes aussi force de "+
        "proposition pour l’optimisation de vos idées et disposons de compétences très pointues pour la conception de solutions mobiles performantes."
    },
    {
        titre:"Développement front end ",
        picture:"/img/fpic1.svg",
        position:"right",
        description:"Le terme « frontend » désigne les éléments d’un site que l’on voit à l’écran et avec lesquels on peut interagir depuis un "+
        "navigateur. En effet, tout ce qu’on voit sur un site internet par exemple, est une combinaison de HTML, CSS et JavaScript. Ces langages "+
        "de programmation utilisés par le développeur Front End sont interprétés par le navigateur de votre ordinateur pour afficher un résultat "+
        "« visuel ». Il s’agit notamment de polices, de menus déroulants, de boutons, de transitions, de curseurs, de formulaires de contact, etc."+

        "Le Frontend se compose généralement :"+
        
        "D’un design créé par un Web designer qui réalise des maquettes graphiques via des outils de création comme Photoshop ou Fireworks."+
        "De code HTML, CSS, JavaScript et jQuery mis en place par un développeur Frontend."+
        "Maintenant, pour que le travail du développeur Front End prenne vie et que le site soit fonctionnel, il manque encore quelques "+
        "éléments. C’est là qu’entre en scène le développeur Back End !"
     },
     {
         titre:"Développement back end ",
         picture:"/img/fpic1.svg",
         position:"left",
         description:"Le « backend » est un peu comme la partie immergée d’un iceberg. On ne la voit pas en tant que simple Internaute mais "+
         "elle représente une très grande partie d’un projet web."+

         "Le Backend se compose généralement de trois éléments :"+
         
         "Un serveur (hébergement web)"+
         "Une application (site web, administration)"+
        "Une base de données (sorte de feuille de calcul pour organiser les données)"+
         "Prenons un exemple pour comprendre le fonctionnement du Back End : Imaginons que vous deviez réserver un vol en ligne pour vos futures "+
         "vacances. Vous vous rendez sur le site de la compagnie aérienne et recherchez le vol qui vous convient. Une fois le vol sélectionné, vous"+
        "renseignez vos informations personnelles et validez votre réservation. Vos informations sont alors enregistrées dans une base de données "+
        "stockée sur un serveur."+
         
         "Toutes ces informations restent sur le serveur, alors quand vient l’heure des vacances (2 mois plus tard) vous vous connectez à l’espace "+
         "client (application) pour imprimer vos billets d’avion et toutes les informations que vous aviez renseignées lors de votre réservation "+
         "sont disponibles sur votre compte."+
         
         "La personne qui administre toute cette technologie est le développeur back end. Les technologies Backend se composent généralement "+
         "de langages comme PHP, Ruby, Python, etc. Pour les rendre encore plus faciles à utiliser, ils sont généralement améliorés par des "+
         "Framework comme Ruby on Rails, Cake PHP, Symfony et Code Igniter qui rendent le développement plus rapide et plus sécurisé."+
         
         "De plus en plus de développeurs disposent à la fois de compétences en backend et en frontend. On les appelle développeurs Full Stack."
      }
      ,
     {
         titre:"DRUPAL ",
         picture:"/img/fpic1.svg",
         position:"right",
         description:"Drupal est  un CMS très performant à ne pas négliger. En cas de projets de grande envergure, Drupal peut tout à fait être "+
         "une solution à envisager en raison des nombreux modules déjà proposés et du savoir-faire de nos développeurs Drupal qui créeront des "+
         "fonctionnalités sur-mesure pour répondre à vos attentes."+
         "Si vous n’avez pas été séduit par ce que propose Drupal, notre agence vous propose également son expertise avec le CMS WordPress."+
         "Dans tous les cas, nos consultants digitaux sauront vous aiguiller vers la solution la plus adaptée à votre projet et vos besoins. "+
         "Contactez notre agence."
      }
      ,
     {
         titre:"WORDPRESS ",
         picture:"/img/fpic1.svg",
         position:"left",
         description:"WordPress WeAre[WP] est une agence de communication digitale spécialisée sur la solution de création de sites internet "+
         "avec le CMS WordPress. Nous accompagnons les entreprises dans leur visibilité sur le web et dans la mise en œuvre de stratégie "+
         "digitale performante."
      }
      ,
     {
         titre:"NODE JS ",
         picture:"/img/fpic1.svg",
         position:"right",
         description:"Node.js est une plateforme logicielle libre en JavaScript, orientée vers les applications réseau événementielles "+
         "hautement concurrentes qui doivent pouvoir monter en charge.Parmi les modules natifs de Node.js, on retrouve http qui permet le "+
         "développement de serveur HTTP. Il est donc possible de se passer de serveurs web tels que Nginx ou Apache lors du déploiement de "+
         "sites et d'applications web développés avec Node.js."
      }
      ,
      {
          titre:"MARKETING DIGITAL",
          picture:"/img/fpic1.svg",
          position:"left",
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
           titre:"GESTION DES PROJETS",
           picture:"/img/fpic1.svg",
           position:"right",
           description:"Nous proposons un suivi de projet tout au long de la vie de votre produit. Chaque site que nous concevons est unique, "+
           "c’est pourquoi notre suivi de projet s’adapte en conséquence. Nous organisons des points réguliers avec les différents protagonistes "+
           "du projet, rédigeons des comptes-rendus, nous pouvons même proposer des services complémentaires comme un accompagnement à la rédaction "+
           "d’un cahier des charges fonctionnel ou encore la rédaction de différents livrables (tests fonctionnels, guides avancés, etc.)."
        }
        ,
       {
           titre:"COMMUNICATION",
           picture:"/img/fpic1.svg",
           position:"left",
           description:"La communication est un pilier du marketing. Il repose sur deux stratégies, l’une désignée par le terme “pull” et l’autre "+
           "désignée par le terme “push”."+
           "La première stratégie (pull) consiste à faire venir le consommateur vers l’offre de la société. C’est notamment le cas d’une campagne de "+
           "publicité."+
           "La seconde stratégie (push) consiste à aller vers le consommateur en rendant l’offre plus attractive. Par exemple, proposer des promotions "+
           "sur des produits est l’une des clés."
        }
        ,
       {
           titre:"REFERENCEMENT",
           picture:"/img/fpic1.svg",
           position:"right",
           description:"Nous vous accompagnons tout au long de votre projet sur les différentes problématiques liées au SEO. Idéalement nous "+
           "intervenons en amont de votre projet."+
           "L’expertise technique des artisans de DUBANI AGENCE  nous permet d’échanger avec tous les acteurs de votre projet."+
           "Adapter notre discours rend notre approche SEO compréhensible par tous car nous comprenons les problématiques de chacun au "+
           "quotidien."+
           "Notre approche du SEO est à la fois technique, globale, marketing et indubitablement « humaine »."
           
        }
        ,
        {
            titre:"CONCEPTION ET STRATÉGIE  DE MARQUE",
            picture:"/img/fpic1.svg",
            position:"left",
            description:"DUBANI AGENCE affine  votre marque afin qu’elle soit acceptée par vos clients et portée avec honneur par l’ensemble de vos collaborateurs."
         }
         ,
        {
            titre:"CONTENT MARKETING",
            picture:"/img/fpic1.svg",
            position:"right",
            description:"La créativité des textes est au cœur de votre communication. Se faire un nom auprès des experts et suivre l’actualité sont les garants de la réussite."
         }
         ,
         {
             titre:"GOOGLE ADS MARKETING",
             picture:"/img/fpic1.svg",
             position:"left",
             description:"DUBANI AGENCE conçoit  tous les formats d’annonces de votre publicité Google : à travers les réseaux Display, l’email marketing."
          }
          ,
         {
             titre:"COMMUNITY MANAGEMENT",
             picture:"/img/fpic1.svg",
             position:"right",
             description:""
          }
          ,
          {
              titre:"SOCIAL MEDIA MARKETING",
              picture:"/img/fpic1.svg",
              position:"left",
              description:"Nous boostons des campagnes publicitaires efficaces et rentables, en s’appuyant sur la divulgation des publicités "+
              "parlantes avec nos expert."
           }
           ,
          {
              titre:"WAZE ADS",
              picture:"/img/fpic1.svg",
              position:"right",
              description:"Nous définissons la bonne pratique publicitaire des solutions proposées par la première application de navigation communautaire au monde : Waze Ads."
           }
           ,
           {
               titre:"VIDEO MARKETING",
               picture:"/img/fpic1.svg",
               position:"left",
               description:"Les professionnelles de DUBANI AGENCE vous garantit la visibilité de vos vidéos grâce à notre expertise artistique."
            }
            ,
           {
               titre:"DIGITAL STRATEGY",
               picture:"/img/fpic1.svg",
               position:"right",
               description:"Avec nos experts ne rester pas sur le banc de touche.soyez le maître de vos œuvres avec des stratégies adéquates."
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