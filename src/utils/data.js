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
import GSBProj_1 from './../assets/img/GSBProj_1.png';
import GSBProj_2 from './../assets/img/GSBProj_2.png';
import GSBProj_3 from './../assets/img/GSBProj_3.png';
import GSBProj_4 from './../assets/img/GSBProj_4.png';
import VDSProj from './../assets/img/VDSProj.png';
import VDSProj_1 from './../assets/img/VDSProj_1.png';
import ReactPersoProj from './../assets/img/ReactPersoProj.PNG';
import ReactPersoProj_1 from './../assets/img/ReactPersoProj_1.PNG';
import ReactPersoProj_2 from './../assets/img/ReactPersoProj_2.PNG';
import MeteoremProj from './../assets/img/MeteoremProj.PNG';
import MeteoremProj_1 from './../assets/img/MeteoremProj_1.PNG';
import MeteoremProj_2 from './../assets/img/MeteoremProj_2.PNG';
import MeteoremProj_3 from './../assets/img/MeteoremProj_3.PNG';
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
            textBtnCreateAccount: 'Cr??er un compte',
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
            title: 'Pr??sentation',
            text: 'Actuellement sur Amiens, j\'ai acquis ces derni??res ann??es un inter??t non n??gligeable pour l\'informatique. J\'ai principalement commenc?? en d??veloppant des modules web ce qui m\'a permis d\'apprendre les bases de la programmation. Par curiosit??, j\'ai pu d??couvrir l\'??tendue des domaines informatiques et ??tant donn?? la vari??t?? de m??tiers, je verrai au fur et ?? mesure de mes ??tudes, dans quel domaine je me sp??cialiserai. \n\n L\'informatique ne fait tout chez moi. Je suis aussi attir?? par l\'univers musical. En effet je pratique le piano, la guitare et je compose des projets musicaux gr??ce ?? des logiciels d??di??s sur ordinateur. Je m\'interesse aussi beaucoup aux cultures ??trang??res, je trouve cela important, surtout quand le contraste avec nos standards est important.',
        },


        // History
        history: {
            title: 'Parcours',

            work: [
                {
                    id: 1,
                    title: 'Aviabag M??t??orem',
                    date: '2021',
                    text: 'Stage chez Aviabag M??t??orem dans le cadre de ma 2??me ann??e de BTS SIO.'
                },
                {
                    id: 2,
                    title: 'A??rolia M??aulte (A??rospace)',
                    date: '2014',
                    text: 'Stage de d??couverte dans le cadre de mon ann??e de 3??me au coll??ge'
                },
            ],

            education: [
                {
                    id: 1,
                    title: 'BTS SIO',
                    date: '2020-2021',
                    text: '2??me ann??e de BTS SIO en option SLAM (D??veloppement informatique)'
                },
                {
                    id: 2,
                    title: 'BTS SIO',
                    date: '2019-2020',
                    text: '1??re ann??e de BTS SIO. Mi-ann??e, J\'ai choisi de prendre l\'option SLAM (D??veloppement informatique)'
                },
                {
                    id: 3,
                    title: 'Licence Informatique',
                    date: '2018-2019',
                    text: '1??re ann??e de fac en licence informatique. Je n\'ai pas continu?? le cursus car les math??matiques ??taient trop pr??sents'
                },
            ],
        },

        // Services
        services: {

            title: 'Savoir-faire et comp??tences',
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

            title: 'Comp??tences',
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
                    title: 'REACT 2020 par la pratique, de A ?? Z',
                    description: 'Ce cours permet de : D??velopper des applications avec la librairie, Communiquer avec des serveurs et API REST, Cr??er des sites internet "Single page" avec le module React-Router, Utiliser Bootstrap avec et sans React-Bootstrap',
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
                    description: 'Ce cours permet de conna??tre : La prise en main g??n??rale et son interface, Les diff??rents outils et plugin pour cr??er un site, Comment acheter son nom de domaine et l??? h??bergement, Cr??ation d\'un site internet type PORTFOLIO, Cr??ation d\'un site internet Business vitrine, Cr??ation d\'un site internet g??n??ral produit de A ?? Z',
                    progress: 49,
                    website : 'Udemy',
                    link: 'https://www.udemy.com/course/wordpress-votre-site-pro-simplement-et-gratuitement/',
                    projetId: 1,
                },
                {
                    id: 3,
                    tag: 'React',
                    img: ReactForm_O,
                    title: 'R??alisez une application web avec React.js',
                    description: 'Ce cours permet de conna??tre : ??tre en mesure d\'expliquer les concepts fondamentaux de React, et ce qui le diff??rencie d\'autres frameworks, Mettre en place un projet avec Create React App, Cr??er des composants React complets avec la syntaxe JavaScript ES2015 et l\'extension JSX, G??rer des formulaires avec ou sans contr??le de saisie, Tester ses composants React',
                    progress: 15,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/4664381-realisez-une-application-web-avec-react-js/4664826-decrivez-un-composant-avec-jsx',
                    projetId: 1,
                },
                {
                    id: 4,
                    tag: 'JQuery',
                    img: JQueryForm_O,
                    title: 'Introduction ?? jQuery',
                    description: 'Ce cours permet de conna??tre : la diff??rence entre jQuery et JavaScript, les concepts principaux de JavaScript qu\'il faut savoir pour utiliser jQuery, s??lectionner des ??l??ments avec jQuery, modifier des ??l??ments avec jQuery, utiliser des ??v??nements pour rendre votre page dynamique et anim??e',
                    progress: 100,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/3504441-introduction-a-jquery',
                    projetId: 1,
                },
                {
                    id: 5,
                    tag: 'Javascript',
                    img: Javascript_O,
                    title: 'Apprenez ?? coder avec JavaScript',
                    description: 'Ce cours permet de : Communiquer efficacement en JavaScript en utilisant le vocabulaire appropri??, R??soudre des probl??mes de base en JavaScript, ??crire un programme en JavaScript',
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
                    description: 'Ce cours permet de : Communiquer efficacement en utilisant les termes sp??cifiques de Bootstrap, Charger des ressources externes dans une page web avec un Content Delivery Network, Cr??er un layout responsive avec le syst??me de grille de Bootstrap, Int??grer une maquette de site web responsive avec Bootstrap, Dynamiser une page web avec des plugins Jquery customis??s pour Bootstrap',
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
                    description: 'Ce cours permet de : installer votre environnement de d??veloppement, ??crire des instructions en PHP, respecter les conventions d\'??criture de code, programmer des fonctions, enregistrer des donn??es dans un fichier, stocker des donn??es dans les sessions et les cookies, communiquer avec la base de donn??es',
                    progress: 100,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/918836-concevez-votre-site-web-avec-php-et-mysql',
                    projetId: 1,
                },
                {
                    id: 8,
                    tag: 'C#',
                    img: OpenClassroomForm,
                    title: 'Apprenez ?? d??velopper en C#',
                    description: 'Ce cours permet de :  ma??triserez les bases de la programmation en C# et saurez cr??er une application capable d\'interagir avec un utilisateur, de lire ses saisies au clavier et d\'afficher des choses ?? l\'??cran via une console. ',
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
                    description: 'Ce cours permet de :  structurer et organiser votre code, cr??er du code maintenable gr??ce aux techniques Sass interm??diaires, optimiser votre code en utilisant les techniques avanc??es de Sass',
                    progress: 4,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/6106181-simplifiez-vous-le-css-avec-sass/6595695-structurez-votre-css',
                    projetId: 1,
                },
                {
                    id: 10,
                    tag: 'HTML',
                    img: OpenClassroomForm,
                    title: 'Apprenez ?? cr??er votre site web avec HTML5 et CSS3',
                    description: 'Ce cours permet de :  utiliser du code HTML, structurer une page web, utiliser du code CSS, mettre en forme une page web en CSS, modifier l\'agencement d\'une page HTML, int??grer des formules dans une page web, adapter une page pour les petites r??solutions en CSS',
                    progress: 100,
                    website : 'OpenClassroom',
                    link: 'https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3',
                    projetId: 1,
                }
            ],
        },

        schoolTraining: {

            title: 'Etudes sup??rieures',

            btsSio:{
                title: 'BTS SIO',
                text: 'Le BTS Services Informatiques aux Organisations est un dipl??me recconu par l\'??tat de niveau BAC+2. Il remplace depuis Septembre 2011, l\'ancien BTS IG (Informatique de gestion).\n En effet, cette nouvelle formule r??ponds aux attentes de la profession en mati??re de qualification. Le programme a ??volu?? en fonction de la place et du r??le des TIC (Technologies de l\'Information et de la Communication) et propose deux sp??cialit??s bien distinctes : Le BTS SIO Option SISR et le BTS SIO Option SLAM.',
                options: [
                    {
                        id: 1,
                        title: 'Option SLAM',
                        description: 'Solutions logicielles et applications m??tiers',
                        text: 'La sp??cialisation SLAM du BTS SIO est elle plus orient??e D??veloppement. Elle permet d\'apprendre ?? r??aliser des logiciels, sites webs, applications mobiles, mais aussi de r??diger des documentations techniques li??es ?? celles-ci. De plus, elle permet d\'apprendre ?? former des utilisateurs pour g??rer la maintenance des applications.',
                    },
                    {
                        id: 2,
                        title: 'Option SISR',
                        description: 'Solutions d\'infrastructures systemes et r??seaux',
                        text: 'La sp??cialisation SISR du BTS SIO permet d???apprendre un m??tier qui consiste ?? installer, configurer et g??rer les ??quipements et les r??seaux informatiques. Cela signifie intervenir sur la conception, la mise en place, le d??ploiement et la maintenance de programmes destin??s ?? la gestion au sein d???une organisation.'
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
                img: [GSBProj, GSBProj_1, GSBProj_2, GSBProj_3, GSBProj_4],
                title: 'Application GSB',
                description: 'Application centralisant des comptes rendus de visites',
                text: 'Cette application repr??sente le 2??me PPE de ma 2??me ann??e de BTS. Ecrite en C#, elle a pour objectif de centraliser les comptes rendus de visites de praticiens pour les visiteurs m??dicaux.\n\n Principales fonctionalit??s : \n - Consultation, modification et impression d\'un rendez-vous \n - Bilan, consultation et modification des visites \n - Consultation des m??dicaments \n - Consultation, modification et suppression d\'un praticien \n\n Ce qui a ??t?? appliqu?? dans ce projet : \n - Les classes : classe m??tier et classe passerelle \n - Les proc??dures SQL',
                links: [
                    {id:'1', link: GSB_Cahier_Des_Charges , icon: <DescriptionRoundedIcon/>, text: 'Cahier des charges'},
                    {id:'2', link: GSB_pdf , icon: <DescriptionRoundedIcon/>, text: 'Documentation'},
                    {id:'3', link: 'https://github.com/arnaudmaillet/SIO-GSB', icon: <GitHubIcon/>, text: 'Github'},
                ]
            },
            {
                id: 2,
                tag: 'Personnel',
                img: [ReactPersoProj, ReactPersoProj_1, ReactPersoProj_2],
                title: 'React App Personnages',
                description: 'Application permet de cr??er des personnages de jeux fictifs',
                text: 'Cette application React permet de personnaliser un personnage fictif de jeux video. Toutefois l\'application n\'est que visuelle (front-end), les donn??es ne sont donc pas enregistr??es dans une base de donn??es. \n\n Principales fonctionalit??s : \n - D??filement des diff??rents personnages stock??es dans un tableau.\n - Attribution des points de comp??tences du personnage \n - S??lection de l\'arme du personnage. \n\n Ce qui a ??t?? appliqu?? dans ce projet : \n - Les composants et leur propri??t??s \n - La syntaxe JSX \n - Les ??venements \n - Les op??rateurs spread \n - Les fonctions fl??ch??es',
                links: [
                    {id:'1', link: 'https://github.com/arnaudmaillet/React_App-Personnages', icon: <GitHubIcon/>, text: 'Github'},
                ]
            },
            {
                id: 3,
                tag: 'Stages',
                img: [MeteoremProj, MeteoremProj_1, MeteoremProj_2, MeteoremProj_3],
                title: 'Site Web M??t??orem',
                description: 'R??alisation d\'un site web de type vitrine pour l\'entreprise M??t??orem',
                text: 'Le site web a ??t?? r??alis?? durant ma p??riode de stage du 11/01/2021 au 19/02/2021 lors de ma 2??me ann??e de BTS SIO. Le site avait pour principale contrainte l\'utilisation de l\'outil WordPress. Ce site ?? ensuite ??t?? h??berg?? sur l\'h??bergeur de l\'entreprise (OVH). \n\n Principales fonctionalit??s : \n - Multilangage \n - Contact de l\'entreprise via un formulaire \n - Pr??sentation de l\'entreprise et de ses offres \n\n Ce qui a ??t?? appliqu?? dans ce projet : \n - La prise en main de l\'outil WordPress \n - L\'utilisation du plugin Elementor Pro, WPMail, GDPR Cookie \n - Hebergement du site via FileZilla et Duplicator',
                links: [
                    {id:'1', link: 'http://meteorem.com/', icon: <LanguageRoundedIcon/>, text: 'Site Web'},
                    {id:'2', link: 'https://github.com/arnaudmaillet/MeteoremWebSite', icon: <GitHubIcon/>, text: 'Github'},
                ]
            },
            {
                id: 4,
                tag: 'BTS',
                img: [VDSProj, VDSProj_1],
                title: 'Site Web VDS',
                description: 'Refonte du site Web Amicale du Val de Somme',
                text: 'Ce site a ??t?? r??alis?? lors de mon 1er PPE de ma deuxi??me ann??e de BTS. Les membres du conseil de l\'association sportive Amical du Val de Somme ont d??cid?? de red??velopper la totalit?? du site web suite au d??part de l\'informaticien. Chaques membres de la classe est charg?? de r??aliser une fonctionnalit?? du site qui lui sera attribu??. \n\n Fonctionalit??s attribu??es : \n - Modification d\'un membre \n - Consultation des membres \n - Ajout d\'un membre \n\n Ce qui a ??t?? appliqu?? dans ce projet : \n - Bases de Javascript \n - Liaison ?? la base de donn??es via PHP \n - Variables de session',
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
                img: [RoseDesVentsProj],
                title: 'Widgets M??t??orem',
                description: 'Conception de widgets int??grables dans une page web',
                text: 'Ce composant a ??t?? r??alis?? durant ma p??riode de stage du 11/01/2021 au 19/02/2021 lors de ma 2??me ann??e de BTS SIO. Sous forme de fichiers, ce composant web permet d\'int??grer un widget m??t??o sur n\'importe quelle page web. Les donn??es sont aliment??es via une API. Pour int??grer le widget, il suffit de copier le dossier contenant les fichiers ?? la racine du site web puis d\'ins??rer la balise <rose-des-vents/>  en renseignant les attributs vent-ville (id de la station) et vent-taille (taille du widget). \n\n Fonctionalit??s attribu??es : \n - Choix de la station ?? afficher \n - Dimensions du widget \n\n Ce qui a ??t?? appliqu?? dans ce projet : \n - Composants web \n - La fonction fetch',
                links: [
                    {id:'1', link: 'https://github.com/arnaudmaillet/rosedesventsMeteoremWidget', icon: <GitHubIcon/>, text: 'Github'},
                ],
            },
            {
                id: 6,
                tag: 'Stages',
                img: [MeteoremAPIProj],
                title: 'API M??t??orem',
                description: 'API Rest alimentant les donn??es des widgets M??t??orem',
                text: 'Cette API a ??t?? r??alis?? durant ma p??riode de stage du 11/01/2021 au 19/02/2021 lors de ma 2??me ann??e de BTS SIO. Elle renvoie sous forme d\'un tableau JSON les donn??es des diff??rentes stations m??t??orologiques. Les donn??es sont ensuite mises en forme dans lors de l\'affichage des widgets \n\n Fonctionalit??s attribu??es : \n - Consultation des donn??es sous forme d\'un tableau JSON \n\n Ce qui a ??t?? appliqu?? dans ce projet : \n - ExpressJS (controllers, routes, liaison avec la base de donn??es ...)',
                links: [
                    {id:'1', link: 'https://github.com/arnaudmaillet/rosedesventsMeteoremAPI2', icon: <GitHubIcon/>, text: 'Github'},
                ],
            },
            {
                id: 7,
                tag: 'BTS',
                img: [ADCProj],
                title: 'Gestion des comptes',
                description: 'Module g??rant les comptes utilisateurs d\'un site en ligne',
                text: 'Ce module a ??t?? r??alis?? lors de mon 1er PPE de ma permi??re ann??e de BTS. L\'objectif est de cr??er deux interfaces, une pour l\'utilisateur permettant de modifier ses coordonn??es et l\'autre pour l\'administrateur permettant de changer ses coordonn??es et celles des autres utilisateurs. Un syst??me de messagerie a ??t?? int??gr?? par la suite. \n\n Fonctionalit??s attribu??es : \n - Consultation, modification et suppression des donn??es de l\'utilisateur \n - Consultation, modification et suppression des donn??es des utilisateurs (admin) \n - Consultation, modification et suppression des messages \n - Cr??ation de comptes utilisateurs \n - Contr??le des donn??es renseign??es \n - R??cup??ration du mot de passe \n\n Ce qui a ??t?? appliqu?? dans ce projet : \n - Expressions r??guli??res \n - Ev??nements javascript',
                links: [
                    {id:'1', link: ADC_Cahier_Des_Charges, icon: <DescriptionRoundedIcon/>, text: 'Cahier des charges'},
                    {id:'2', link: ADC_Guide_Utilisateur, icon: <DescriptionRoundedIcon/>, text: 'Guide utilisateur'},
                    {id:'3', link: ADC_Base_Donnees, icon: <DescriptionRoundedIcon/>, text: 'Descriptif base de donn??es'},
                    {id:'4', link: 'https://github.com/arnaudmaillet/projetSI6', icon: <GitHubIcon/>, text: 'Github'},
                ],
            },
        ],
    },
    
    skillsArray : {
        title: 'Tableau des comp??tences'
    },

    veilles: {
        droit: 
        {
            title: 'Veilles juridique',
            items: [
                {id: '1', title: 'Le contrat SAAS', link: <iframe src="https://lyceesaintremi-my.sharepoint.com/personal/arnaud_maillet_saint-remi_net/_layouts/15/Doc.aspx?sourcedoc={f383ba5a-1d26-44ec-ab13-7beea3697d66}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="350px" height="221px" frameborder="0">Ceci est un document <a target="_blank" href="https://office.com">Microsoft Office</a> incorpor??, avec <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>}
            ]
        },
        tech: 
        {
            title: 'Veilles technologique',
            items: [
                {id: '1', title: 'La cryptographie', link : <iframe src="https://lyceesaintremi-my.sharepoint.com/personal/arnaud_maillet_saint-remi_net/_layouts/15/Doc.aspx?sourcedoc={4593c25c-bd13-41a4-a955-92df576712b1}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="350px" height="221px" frameborder="0">Ceci est un document <a target="_blank" href="https://office.com">Microsoft Office</a> incorpor??, avec <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>}
            ]
        }
    },

    Mentions: {
        adresse: 'www./',
        hebergeur: {
            name: 'OVH SA', adress: '2 rue Kellermann ??? BP 80157 59053 ROUBAIX CEDEX 1',
        }
    }
}