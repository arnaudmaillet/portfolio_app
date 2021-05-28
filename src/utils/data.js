// Import icons
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import DvrRoundedIcon from '@material-ui/icons/DvrRounded';
import NewReleasesRoundedIcon from '@material-ui/icons/NewReleasesRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import ContactlessRoundedIcon from '@material-ui/icons/ContactlessRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import SlowMotionVideoRoundedIcon from '@material-ui/icons/SlowMotionVideoRounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import BrightnessLowRoundedIcon from '@material-ui/icons/BrightnessLowRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import GavelRoundedIcon from '@material-ui/icons/GavelRounded';

// Import profile image
import WordpressForm from './../assets/img/wordpressForm.jpg';
import ReactForm from './../assets/img/reactForm.jpg';
import OpenClassroomForm from './../assets/img/Logo_OpenClassrooms.png';
import BootstrapForm from './../assets/img/bootstrapFrom.jpg';
import ReactForm_O from './../assets/img/reactForm_O.jpg';
import JQueryForm_O from './../assets/img/JQueryForm_O.jpg';
import Javascript_O from './../assets/img/JavascriptForm_O.jpg';
import SQLForm_O from './../assets/img/SQLForm_O.jpg';
import SassForm_O from './../assets/img/sassForm_O.jpg';
import GSBProj from './../assets/img/GSBProj.png';
import VDSProj from './../assets/img/VDSProj.png';
import ReactPersoProj from './../assets/img/ReactPersoProj.PNG';
import MeteoremProj from './../assets/img/MeteoremProj.PNG';
import RoseDesVentsProj from './../assets/img/roseDesVentsProj.PNG';
import MeteoremAPIProj from './../assets/img/MeteoremAPIProj.png';
import ADCProj from './../assets/img/ADCProj.PNG';
import ImgProfil from './../assets/img/2019-12-15_1649088.jpg';

// Import PDF
import pdf from './../assets/pdf/CV_ArnaudMAILLET.pdf';
import E6 from './../assets/pdf/Bilan E6 de MAILLET ARNAUD.pdf';
import GSB_pdf from './../assets/pdf/PPE_Documentation.pdf';
import GSB_Cahier_Des_Charges from './../assets/pdf/Cahier des charges_GSB.pdf';
import VDS_Cahier_Des_Charges from './../assets/pdf/Cahier des charges_VDS.pdf';
import VDS_Fiche_Tech_Membre from './../assets/pdf/Fiche_technique_membre_VDS.pdf';
import VDS_Guide_Admin from './../assets/pdf/Guide_Utilisateur_Administrateur_VDS.pdf';
import VDS_Fiche_Profil from './../assets/pdf/Fiche_technique_profil_VDS.pdf';
import VDS_Modules from './../assets/pdf/Fiche_presentation_modules_VDS.pdf';
import ADC_Cahier_Des_Charges from './../assets/pdf/Cahier des charges_ADC.pdf';
import ADC_Guide_Utilisateur from './../assets/pdf/Guide_Utilisateur_ADC.pdf';
import ADC_Base_Donnees from './../assets/pdf/Descriptif_base_de_donnees_ADC.pdf';

export default {

    settings: {
        darkmodeDefault: false,
        cardElevation: 8,
        transitionEffect: '0.3s',
    },

    authentication: {
        login: {
            usernameField: 'Nom d\'utilisateur',
            passwordField: 'Mot de passe',
            textBtnLogin: 'Se connecter',
            textBtnCreateAccount: 'Créer un compte',
        },

        register: {
            usernameField: 'Nom d\'utilisateur',
            passwordField: 'Mot de passe',
            passwordConfirmField: 'Confirmer le mot de passe',
            textBtnLogin: 'S\'enregistrer',
            textBtnLeft: 'Retour',
        },
    },

    profile: {
        name: 'Maillet',
        firstName : 'Arnaud',
        title: 'Developper informatique',
    
        img : ImgProfil,
        email: 'arnaud.maillet.pro@gmail.com',
        adress: '14 rue des Rinchevaux 8000 AMIENS',
        job: 'etudiant',
        phone: '0688772879',
        CV: pdf,
        E6: E6,

        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2094.7675155657794!2d2.296521506320683!3d49.89343022524075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e78438b0abd7c3%3A0xff54500fc939881f!2zTHljw6llIFByaXbDqSBTYWludCBSw6ltaQ!5e0!3m2!1sfr!2sfr!4v1617489467835!5m2!1sfr!2sfr" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    },

    icons: {

        authentication_username: <AccountCircleRoundedIcon/>,
        authentication_password: <LockIcon/>,
        authentication_register_showPassword: <VisibilityIcon/>,
        authentication_register_hidePassword: <VisibilityOffIcon/>,

        nav_item1: <HomeRoundedIcon/>,
        nav_item2: <SchoolRoundedIcon/>,
        nav_item3: <DvrRoundedIcon/>,
        nav_item4: <NewReleasesRoundedIcon/>,
        nav_item5: <GavelRoundedIcon/>,
        nav_authentication: <AccountCircleRoundedIcon/>,
        nav_darkmode_light: <BrightnessLowRoundedIcon/>,
        nav_darkmode_dark: <Brightness4RoundedIcon/>,
        nav_top: <PublishRoundedIcon/>,

        dialog_close: <HighlightOffRoundedIcon/>,
        dialog_authentication_login: <SlowMotionVideoRoundedIcon/>,
        dialog_authentication_logout: <ExitToAppRoundedIcon/>,
        dialog_authentication_create: <AddCircleOutlineRoundedIcon/>,

        array_row_close: <KeyboardArrowUpRoundedIcon/>,
        array_row_open: <KeyboardArrowDownRoundedIcon/>,

        header_timeline: <AssignmentIndRoundedIcon/>,
        work_timeline: <WorkRoundedIcon/>,
        education_timeline: <SchoolRoundedIcon/>,
        btn_download: <GetAppRoundedIcon/>,
        btn_contact: <ContactlessRoundedIcon/>,
        btn_sio: <SlowMotionVideoRoundedIcon/>,

        web : <LanguageRoundedIcon/>
    },

    // Array of social object.
    socials: {
        Facebook: {
            id: 1,
            link: 'https://www.facebook.com/',
            text: 'Facebook',
            icon: <FacebookIcon/>,
            color: '#2f55a4',
        },

        Twitter: {
            id: 2,
            link: 'https://twitter.com/',
            text: 'Twitter',
            icon: <TwitterIcon/>,
            color: '00acee',
        },

        Linkedin: {
            id: 3,
            link: 'https://www.linkedin.com/',
            text: 'Linkedin',
            icon: <LinkedInIcon/>,
            color: '0e76a8',
        },

        Github: {
            id: 4,
            link: 'https://github.com/arnaudmaillet',
            text: 'Github',
            icon: <GitHubIcon/>,
            color: '#787878'
        },
    },



    // Pages
    home: {

        // About me
        about: {
            title: 'Présentation',
            text: 'Actuellement sur Amiens, j\'ai acquis ces dernières années un interêt non négligeable pour l\'informatique. J\'ai principalement commencé en développant des modules web ce qui m\'a permis d\'apprendre les bases de la programmation. Par curiosité, j\'ai pu découvrir l\'étendue des domaines informatiques et étant donné la variété de métiers, je verrai au fur et à mesure de mes études, dans quel domaine je me spécialiserai. \n\n L\'informatique ne fait tout chez moi. Je suis aussi attiré par l\'univers musical. En effet je pratique le piano, la guitare et je compose des projets musicaux grâce à des logiciels dédiés sur ordinateur. Je m\'interesse aussi beaucoup aux cultures étrangères, je trouve cela important, surtout quand le contraste avec nos standards est important.',
        },


        // History
        history: {
            title: 'Parcours',

            work: [
                {
                    id: 1,
                    title: 'Aviabag Météorem',
                    date: '2021',
                    text: 'Stage chez Aviabag Météorem dans le cadre de ma 2ème année de BTS SIO.'
                },
                {
                    id: 2,
                    title: 'Aérolia Méaulte (Aérospace)',
                    date: '2014',
                    text: 'Stage de découverte dans le cadre de mon année de 3ème au collège'
                },
            ],

            education: [
                {
                    id: 1,
                    title: 'BTS SIO',
                    date: '2020-2021',
                    text: '2ème année de BTS SIO en option SLAM (Développement informatique)'
                },
                {
                    id: 2,
                    title: 'BTS SIO',
                    date: '2019-2020',
                    text: '1ère année de BTS SIO. Mi-année, J\'ai choisi de prendre l\'option SLAM (Développement informatique)'
                },
                {
                    id: 3,
                    title: 'Licence Informatique',
                    date: '2018-2019',
                    text: '1ère année de fac en licence informatique. Je n\'ai pas continué le cursus car les mathématiques étaient trop présents'
                },
            ],
        },

        // Services
        services: {

            title: 'Savoir-faire et compétences',
            items: [
                {
                    id: 1,
                    title: 'Developpement d\'interfaces web',
                    icon: <WebOutlinedIcon/>,
                },
                {
                    id: 2,
                    title: 'Developpement d\'applications',
                    icon: <DeveloperModeOutlinedIcon/>,
                },
                {
                    id: 3,
                    title: 'Maintenance informatique',
                    icon: <DnsOutlinedIcon/>,
                },
            ],   
        },

        // Skills
        skills: {

            title: 'Compétences',
            items: [
                {
                    id: 1,
                    title: 'Front-end',
                    elements: ['HTML', 'CSS', 'SCSS', 'JQuery', 'Javascript', 'ReactJS', 'Bootstrap', 'Material UI', 'C#', 'Python'],
                },
                {
                    id: 2,
                    title: 'Back-end',
                    elements: ['ExpressJS', 'PHP', 'C#', 'JSON'],
                },
                {
                    id: 3,
                    title: 'Database',
                    elements: ['MySQL'],
                },
                {
                    id: 4,
                    title: 'Versioning',
                    elements: ['Git', 'Github'],
                }
            ],
        },
    },

    learning: {
        
        selfLearning: {

            title: 'Formations personnelles',
            items: [
                {
                    id: 1,
                    tag: 'React',
                    img: ReactForm,
                    title: 'REACT 2020 par la pratique, de A à Z',
                    description: 'Ce cours permet de : Développer des applications avec la librairie, Communiquer avec des serveurs et API REST, Créer des sites internet "Single page" avec le module React-Router, Utiliser Bootstrap avec et sans React-Bootstrap',
                    progress: 70,
                    website : 'Udemy',
                    link: 'https://www.udemy.com/course/react-2020-par-la-pratique-de-a-a-z-evolution-progressive/',
                    projetId: 1,
                },
                {
                    id: 2,
                    tag: 'WordPress',
                    img: WordpressForm,
                    title: 'WordPress - Votre site Pro simplement et gratuitement',
                    description: 'Ce cours permet de connaître : La prise en main générale et son interface, Les différents outils et plugin pour créer un site, Comment acheter son nom de domaine et l’ hébergement, Création d\'un site internet type PORTFOLIO, Création d\'un site internet Business vitrine, Création d\'un site internet général produit de A à Z',
                    progress: 49,
                    website : 'Udemy',
                    link: 'https://www.udemy.com/course/wordpress-votre-site-pro-simplement-et-gratuitement/',
                    projetId: 1,
                },
                {
                    id: 3,
                    tag: 'React',
                    img: ReactForm_O,
                    title: 'Réalisez une application web avec React.js',
                    description: 'Ce cours permet de connaître : Être en mesure d\'expliquer les concepts fondamentaux de React, et ce qui le différencie d\'autres frameworks, Mettre en place un projet avec Create React App, Créer des composants React complets avec la syntaxe JavaScript ES2015 et l\'extension JSX, Gérer des formulaires avec ou sans contrôle de saisie, Tester ses composants React',
                    progress: 15,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/4664381-realisez-une-application-web-avec-react-js/4664826-decrivez-un-composant-avec-jsx',
                    projetId: 1,
                },
                {
                    id: 4,
                    tag: 'JQuery',
                    img: JQueryForm_O,
                    title: 'Introduction à jQuery',
                    description: 'Ce cours permet de connaître : la différence entre jQuery et JavaScript, les concepts principaux de JavaScript qu\'il faut savoir pour utiliser jQuery, sélectionner des éléments avec jQuery, modifier des éléments avec jQuery, utiliser des évènements pour rendre votre page dynamique et animée',
                    progress: 100,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/3504441-introduction-a-jquery',
                    projetId: 1,
                },
                {
                    id: 5,
                    tag: 'Javascript',
                    img: Javascript_O,
                    title: 'Apprenez à coder avec JavaScript',
                    description: 'Ce cours permet de : Communiquer efficacement en JavaScript en utilisant le vocabulaire approprié, Résoudre des problèmes de base en JavaScript, Écrire un programme en JavaScript',
                    progress: 100,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript',
                    projetId: 1,
                },
                {
                    id: 6,
                    tag: 'Bootstrap',
                    img: BootstrapForm,
                    title: 'Prenez en main Bootstrap',
                    description: 'Ce cours permet de : Communiquer efficacement en utilisant les termes spécifiques de Bootstrap, Charger des ressources externes dans une page web avec un Content Delivery Network, Créer un layout responsive avec le système de grille de Bootstrap, Intégrer une maquette de site web responsive avec Bootstrap, Dynamiser une page web avec des plugins Jquery customisés pour Bootstrap',
                    progress: 100,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/1885491-prenez-en-main-bootstrap',
                    projetId: 1,
                },
                {
                    id: 7,
                    tag: 'SQL',
                    img: SQLForm_O,
                    title: 'Concevez votre site web avec PHP et MySQL',
                    description: 'Ce cours permet de : installer votre environnement de développement, écrire des instructions en PHP, respecter les conventions d\'écriture de code, programmer des fonctions, enregistrer des données dans un fichier, stocker des données dans les sessions et les cookies, communiquer avec la base de données',
                    progress: 100,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/918836-concevez-votre-site-web-avec-php-et-mysql',
                    projetId: 1,
                },
                {
                    id: 8,
                    tag: 'C#',
                    img: OpenClassroomForm,
                    title: 'Apprenez à développer en C#',
                    description: 'Ce cours permet de :  maîtriserez les bases de la programmation en C# et saurez créer une application capable d\'interagir avec un utilisateur, de lire ses saisies au clavier et d\'afficher des choses à l\'écran via une console. ',
                    progress: 27,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/1526901-apprenez-a-developper-en-c/2866671-les-methodes',
                    projetId: 1,
                },
                {
                    id: 9,
                    tag: 'Sass',
                    img: SassForm_O,
                    title: 'Simplifiez-vous le CSS avec Sass',
                    description: 'Ce cours permet de :  structurer et organiser votre code, créer du code maintenable grâce aux techniques Sass intermédiaires, optimiser votre code en utilisant les techniques avancées de Sass',
                    progress: 4,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/6106181-simplifiez-vous-le-css-avec-sass/6595695-structurez-votre-css',
                    projetId: 1,
                },
                {
                    id: 10,
                    tag: 'HTML',
                    img: OpenClassroomForm,
                    title: 'Apprenez à créer votre site web avec HTML5 et CSS3',
                    description: 'Ce cours permet de :  utiliser du code HTML, structurer une page web, utiliser du code CSS, mettre en forme une page web en CSS, modifier l\'agencement d\'une page HTML, intégrer des formules dans une page web, adapter une page pour les petites résolutions en CSS',
                    progress: 100,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3',
                    projetId: 1,
                }
            ],
        },

        schoolTraining: {

            title: 'Etudes supérieures',

            btsSio:{
                title: 'BTS SIO',
                text: 'Le BTS Services Informatiques aux Organisations est un diplôme recconu par l\'état de niveau BAC+2. Il remplace depuis Septembre 2011, l\'ancien BTS IG (Informatique de gestion).\n En effet, cette nouvelle formule réponds aux attentes de la profession en matière de qualification. Le programme a évolué en fonction de la place et du rôle des TIC (Technologies de l\'Information et de la Communication) et propose deux spécialités bien distinctes : Le BTS SIO Option SISR et le BTS SIO Option SLAM.',
                options: [
                    {
                        id: 1,
                        title: 'Option SLAM',
                        description: 'Solutions logicielles et applications métiers',
                        text: 'La spécialisation SLAM du BTS SIO est elle plus orientée Développement. Elle permet d\'apprendre à réaliser des logiciels, sites webs, applications mobiles, mais aussi de rédiger des documentations techniques liées à celles-ci. De plus, elle permet d\'apprendre à former des utilisateurs pour gérer la maintenance des applications.',
                    },
                    {
                        id: 2,
                        title: 'Option SISR',
                        description: 'Solutions d\'infrastructures systemes et réseaux',
                        text: 'La spécialisation SISR du BTS SIO permet d’apprendre un métier qui consiste à installer, configurer et gérer les équipements et les réseaux informatiques. Cela signifie intervenir sur la conception, la mise en place, le déploiement et la maintenance de programmes destinés à la gestion au sein d’une organisation.'
                    },
                ],
            },
        }
    },


    projects: {

        title: 'Projets',
        items: [
            {
                id: 1,
                tag: 'BTS',
                img: GSBProj,
                title: 'Application GSB',
                description: 'Application centralisant des comptes rendus de visites',
                text: 'Cette application représente le 2ème PPE de ma 2ème année de BTS. Ecrite en C#, elle a pour objectif de centraliser les comptes rendus de visites de praticiens pour les visiteurs médicaux.\n\n Principales fonctionalités : \n - Consultation, modification et impression d\'un rendez-vous \n - Bilan, consultation et modification des visites \n - Consultation des médicaments \n - Consultation, modification et suppression d\'un praticien \n\n Ce qui a été appliqué dans ce projet : \n - Les classes : classe métier et classe passerelle \n - Les procédures SQL',
                links: [
                    {id:'1', link: GSB_Cahier_Des_Charges , icon: <DescriptionRoundedIcon/>, text: 'Cahier des charges'},
                    {id:'2', link: GSB_pdf , icon: <DescriptionRoundedIcon/>, text: 'Documentation'},
                    {id:'3', link: 'https://github.com/arnaudmaillet/SIO-GSB', icon: <GitHubIcon/>, text: 'Github'},
                ]
            },
            {
                id: 2,
                tag: 'Personnel',
                img: ReactPersoProj,
                title: 'React App Personnages',
                description: 'Application permet de créer des personnages de jeux fictifs',
                text: 'Cette application React permet de personnaliser un personnage fictif de jeux video. Toutefois l\'application n\'est que visuelle (front-end), les données ne sont donc pas enregistrées dans une base de données. \n\n Principales fonctionalités : \n - Défilement des différents personnages stockées dans un tableau.\n - Attribution des points de compétences du personnage \n - Sélection de l\'arme du personnage. \n\n Ce qui a été appliqué dans ce projet : \n - Les composants et leur propriétés \n - La syntaxe JSX \n - Les évenements \n - Les opérateurs spread \n - Les fonctions fléchées',
                links: [
                    {id:'1', link: 'https://github.com/arnaudmaillet/React_App-Personnages', icon: <GitHubIcon/>, text: 'Github'},
                ]
            },
            {
                id: 3,
                tag: 'Stages',
                img: MeteoremProj,
                title: 'Site Web Météorem',
                description: 'Réalisation d\'un site web de type vitrine pour l\'entreprise Météorem',
                text: 'Le site web a été réalisé durant ma période de stage du 11/01/2021 au 19/02/2021 lors de ma 2ème année de BTS SIO. Le site avait pour principale contrainte l\'utilisation de l\'outil WordPress. Ce site à ensuite été hébergé sur l\'hébergeur de l\'entreprise (OVH). \n\n Principales fonctionalités : \n - Multilangage \n - Contact de l\'entreprise via un formulaire \n - Présentation de l\'entreprise et de ses offres \n\n Ce qui a été appliqué dans ce projet : \n - La prise en main de l\'outil WordPress \n - L\'utilisation du plugin Elementor Pro, WPMail, GDPR Cookie \n - Hebergement du site via FileZilla et Duplicator',
                links: [
                    {id:'1', link: 'http://meteorem.com/', icon: <LanguageRoundedIcon/>, text: 'Site Web'},
                    {id:'2', link: 'https://github.com/arnaudmaillet/MeteoremWebSite', icon: <GitHubIcon/>, text: 'Github'},
                ]
            },
            {
                id: 4,
                tag: 'BTS',
                img: VDSProj,
                title: 'Site Web VDS',
                description: 'Refonte du site Web Amicale du Val de Somme',
                text: 'Ce site a été réalisé lors de mon 1er PPE de ma deuxième année de BTS. Les membres du conseil de l\'association sportive Amical du Val de Somme ont décidé de redévelopper la totalité du site web suite au départ de l\'informaticien. Chaques membres de la classe est chargé de réaliser une fonctionnalité du site qui lui sera attribué. \n\n Fonctionalités attribuées : \n - Modification d\'un membre \n - Consultation des membres \n - Ajout d\'un membre \n\n Ce qui a été appliqué dans ce projet : \n - Bases de Javascript \n - Liaison à la base de données via PHP \n - Variables de session',
                links: [
                    {id:'1', link: VDS_Cahier_Des_Charges, icon: <DescriptionRoundedIcon/>, text: 'Cahier des charges'},
                    {id:'2', link: VDS_Modules, icon: <DescriptionRoundedIcon/>, text: 'Fiche modules'},
                    {id:'3', link: VDS_Fiche_Profil, icon: <DescriptionRoundedIcon/>, text: 'Fiche technique profil'},
                    {id:'4', link: VDS_Fiche_Tech_Membre, icon: <DescriptionRoundedIcon/>, text: 'Fiche technique membre'},
                    {id:'5', link: VDS_Guide_Admin, icon: <DescriptionRoundedIcon/>, text: 'Documentation admin'},
                    {id:'6', link: 'https://github.com/arnaudmaillet/SIO-VDS', icon: <GitHubIcon/>, text: 'Github'},
                ],
            },
            {
                id: 5,
                tag: 'Stages',
                img: RoseDesVentsProj,
                title: 'Widgets Météorem',
                description: 'Conception de widgets intégrables dans une page web',
                text: 'Ce composant a été réalisé durant ma période de stage du 11/01/2021 au 19/02/2021 lors de ma 2ème année de BTS SIO. Sous forme de fichiers, ce composant web permet d\'intégrer un widget météo sur n\'importe quelle page web. Les données sont alimentées via une API. Pour intégrer le widget, il suffit de copier le dossier contenant les fichiers à la racine du site web puis d\'insérer la balise <rose-des-vents/>  en renseignant les attributs vent-ville (id de la station) et vent-taille (taille du widget). \n\n Fonctionalités attribuées : \n - Choix de la station à afficher \n - Dimensions du widget \n\n Ce qui a été appliqué dans ce projet : \n - Composants web \n - La fonction fetch',
                links: [
                    {id:'1', link: 'https://github.com/arnaudmaillet/rosedesventsMeteoremWidget', icon: <GitHubIcon/>, text: 'Github'},
                ],
            },
            {
                id: 6,
                tag: 'Stages',
                img: MeteoremAPIProj,
                title: 'API Météorem',
                description: 'API Rest alimentant les données des widgets Météorem',
                text: 'Cette API a été réalisé durant ma période de stage du 11/01/2021 au 19/02/2021 lors de ma 2ème année de BTS SIO. Elle renvoie sous forme d\'un tableau JSON les données des différentes stations météorologiques. Les données sont ensuite mises en forme dans lors de l\'affichage des widgets \n\n Fonctionalités attribuées : \n - Consultation des données sous forme d\'un tableau JSON \n\n Ce qui a été appliqué dans ce projet : \n - ExpressJS (controllers, routes, liaison avec la base de données ...)',
                links: [
                    {id:'1', link: 'https://github.com/arnaudmaillet/rosedesventsMeteoremAPI2', icon: <GitHubIcon/>, text: 'Github'},
                ],
            },
            {
                id: 7,
                tag: 'BTS',
                img: ADCProj,
                title: 'Gestion des comptes',
                description: 'Module gérant les comptes utilisateurs d\'un site en ligne',
                text: 'Ce module a été réalisé lors de mon 1er PPE de ma permière année de BTS. L\'objectif est de créer deux interfaces, une pour l\'utilisateur permettant de modifier ses coordonnées et l\'autre pour l\'administrateur permettant de changer ses coordonnées et celles des autres utilisateurs. Un système de messagerie a été intégré par la suite. \n\n Fonctionalités attribuées : \n - Consultation, modification et suppression des données de l\'utilisateur \n - Consultation, modification et suppression des données des utilisateurs (admin) \n - Consultation, modification et suppression des messages \n - Création de comptes utilisateurs \n - Contrôle des données renseignées \n - Récupération du mot de passe \n\n Ce qui a été appliqué dans ce projet : \n - Expressions régulières \n - Evènements javascript',
                links: [
                    {id:'1', link: ADC_Cahier_Des_Charges, icon: <DescriptionRoundedIcon/>, text: 'Cahier des charges'},
                    {id:'2', link: ADC_Guide_Utilisateur, icon: <DescriptionRoundedIcon/>, text: 'Guide utilisateur'},
                    {id:'3', link: ADC_Base_Donnees, icon: <DescriptionRoundedIcon/>, text: 'Descriptif base de données'},
                    {id:'4', link: 'https://github.com/arnaudmaillet/projetSI6', icon: <GitHubIcon/>, text: 'Github'},
                ],
            },
        ],
    },
    
    skillsArray : {
        title: 'Tableau des compétences'
    },

    veilles: {
        droit: 
        {
            title: 'Veilles juridique',
            items: [
                {id: '1', title: 'Le contrat SAAS', link: <iframe src="https://lyceesaintremi-my.sharepoint.com/personal/arnaud_maillet_saint-remi_net/_layouts/15/Doc.aspx?sourcedoc={f383ba5a-1d26-44ec-ab13-7beea3697d66}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="350px" height="221px" frameborder="0">Ceci est un document <a target="_blank" href="https://office.com">Microsoft Office</a> incorporé, avec <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>}
            ]
        },
        tech: 
        {
            title: 'Veilles technologique',
            items: [
                {id: '1', title: 'La cryptographie', link : <iframe src="https://lyceesaintremi-my.sharepoint.com/personal/arnaud_maillet_saint-remi_net/_layouts/15/Doc.aspx?sourcedoc={4593c25c-bd13-41a4-a955-92df576712b1}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="350px" height="221px" frameborder="0">Ceci est un document <a target="_blank" href="https://office.com">Microsoft Office</a> incorporé, avec <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>}
            ]
        }
    },

    Mentions: {
        adresse: 'www./',
        hebergeur: {
            name: 'OVH SA', adress: '2 rue Kellermann – BP 80157 59053 ROUBAIX CEDEX 1',
        }
    }
}