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

// Import profile image
import ImgProjet from './../assets/img/projet.jpg';
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
import ImgProfil from './../assets/img/2019-12-15_1649088.jpg'


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
        adress: '14 rue des Rinchevaux 8000 Amiens',
        job: 'etudiant',
        phone: '0101010101',

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
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },


        // History
        history: {
            title: 'Parcours',

            work: [
                {
                    id: 1,
                    title: 'Entreprise 1',
                    date: '1900-1914',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    id: 2,
                    title: 'Entreprise 2',
                    date: '1880-1890',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    id: 3,
                    title: 'Entreprise 3',
                    date: '1860-1866',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
            ],

            education: [
                {
                    id: 1,
                    title: 'Ecole 1',
                    date: '1900-1914',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    id: 2,
                    title: 'Ecole 2',
                    date: '1880-1890',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    id: 3,
                    title: 'Ecole 3',
                    date: '1860-1866',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
                },
                {
                    id: 2,
                    title: 'Developpement d\'applications',
                    icon: <DeveloperModeOutlinedIcon/>,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
                },
                {
                    id: 3,
                    title: 'Maintenance informatique',
                    icon: <DnsOutlinedIcon/>,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
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
                    elements: ['HTML', 'CSS', 'SCSS', 'JQuery', 'Javascript', 'ReactJS', 'Bootstrap', 'Material UI'],
                },
                {
                    id: 2,
                    title: 'Back-end',
                    elements: ['ExpressJS', 'PHP'],
                },
                {
                    id: 3,
                    title: 'Applications',
                    elements: ['C#', 'Python'],
                },
                {
                    id: 4,
                    title: 'Database',
                    elements: ['MySQL', 'Access'],
                },
                {
                    id: 5,
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
                tag: 'BTSsio',
                img: GSBProj,
                title: 'React Projet 1',
                description: 'Voici un projet de blabla concerant les blablabla',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                links: [
                    {id:'1', link: 'https://www.google.com', icon: <DescriptionRoundedIcon/>, text: 'Documentation'},
                    {id:'2', link: 'https://www.google.com', icon: <LanguageRoundedIcon/>, text: 'Lien'},
                    {id:'3', link: 'https://www.google.com', icon: <GitHubIcon/>, text: 'Github'},
                ]
            },
            {
                id: 2,
                tag: 'Personnel',
                img: ReactPersoProj,
                title: 'React App Personnages',
                description: 'Cette application permet de créer des personnages de jeux',
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
                description: 'Réalisation d\'un site web type vitrine pour l\'entreprise Météorem',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                links: [
                    {id:'1', link: 'http://meteorem.com/', icon: <LanguageRoundedIcon/>, text: 'Site Web'},
                    {id:'2', link: 'https://github.com/arnaudmaillet/MeteoremWebSite', icon: <GitHubIcon/>, text: 'Github'},
                ]
            },
            {
                id: 4,
                tag: 'BTSsio',
                img: VDSProj,
                title: 'Php Projet 1',
                description: 'Voici un projet de blabla concerant les blablabla',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                links: [
                    {id:'1', link: 'https://www.google.com', icon: <DescriptionRoundedIcon/>, text: 'Documentation'},
                    {id:'2', link: 'https://www.google.com', icon: <LanguageRoundedIcon/>, text: 'Lien'},
                    {id:'3', link: 'https://www.google.com', icon: <GitHubIcon/>, text: 'Github'},
                ],
            },
            {
                id: 5,
                tag: 'Stages',
                img: RoseDesVentsProj,
                title: 'Php Projet 1',
                description: 'Voici un projet de blabla concerant les blablabla',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                links: [
                    {id:'1', link: 'https://www.google.com', icon: <DescriptionRoundedIcon/>, text: 'Documentation'},
                    {id:'2', link: 'https://www.google.com', icon: <LanguageRoundedIcon/>, text: 'Lien'},
                    {id:'3', link: 'https://www.google.com', icon: <GitHubIcon/>, text: 'Github'},
                ],
            },
            {
                id: 6,
                tag: 'Stages',
                img: MeteoremAPIProj,
                title: 'Php Projet 1',
                description: 'Voici un projet de blabla concerant les blablabla',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                links: [
                    {id:'1', link: 'https://www.google.com', icon: <DescriptionRoundedIcon/>, text: 'Documentation'},
                    {id:'2', link: 'https://www.google.com', icon: <LanguageRoundedIcon/>, text: 'Lien'},
                    {id:'3', link: 'https://www.google.com', icon: <GitHubIcon/>, text: 'Github'},
                ],
            },
            {
                id: 7,
                tag: 'BTSsio',
                img: ADCProj,
                title: 'Php Projet 1',
                description: 'Voici un projet de blabla concerant les blablabla',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                links: [
                    {id:'1', link: 'https://www.google.com', icon: <DescriptionRoundedIcon/>, text: 'Documentation'},
                    {id:'2', link: 'https://www.google.com', icon: <LanguageRoundedIcon/>, text: 'Lien'},
                    {id:'3', link: 'https://www.google.com', icon: <GitHubIcon/>, text: 'Github'},
                ],
            },
        ],
    },
    
    skillsArray : {
        title: 'Tableau des compétences'
    },

    tech: {
        title: 'Veilles technologiques',
    },
}