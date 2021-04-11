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


// Import profile image
import ImgProfil from './../assets/img/profil.jpg';
import ImgProjet from './../assets/img/projet.jpg'


export default {

    settings: {
        cardElevation: 8,
        transitionEffect: '0.3s',
    },

    profile: {
        name: 'Maillet Arnaud',
        title: 'Developper par passion',
    
        img : ImgProfil,
        age: '20 ans',
        email: 'arnaud@arnaud.com',
        adress: '12 rue de la rue',
        job: 'etudiant',
        phone: '0101010101',

        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2094.7675155657794!2d2.296521506320683!3d49.89343022524075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e78438b0abd7c3%3A0xff54500fc939881f!2zTHljw6llIFByaXbDqSBTYWludCBSw6ltaQ!5e0!3m2!1sfr!2sfr!4v1617489467835!5m2!1sfr!2sfr" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    },

    icons: {
        nav_item1: <HomeRoundedIcon/>,
        nav_item2: <SchoolRoundedIcon/>,
        nav_item3: <DvrRoundedIcon/>,
        nav_item4: <NewReleasesRoundedIcon/>,
        nav_top: <PublishRoundedIcon/>,

        header_timeline: <AccountCircleRoundedIcon/>,
        work_timeline: <WorkRoundedIcon/>,
        education_timeline: <SchoolRoundedIcon/>,
        btn_download: <GetAppRoundedIcon/>,
        btn_contact: <ContactlessRoundedIcon/>,
        btn_sio: <SlowMotionVideoRoundedIcon/>,
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
                    elements: ['NodeJS', 'PHP'],
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
                    img: ImgProjet,
                    title: 'Formation 1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                    progress: '80',
                    link: 'https://www.google.com',
                    projetId: 1,
                },
                {
                    id: 2,
                    tag: 'C#',
                    img: ImgProjet,
                    title: 'Formation 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                    progress: '30',
                    link: 'https://www.google.com',
                    projetId: 1,
                },
                {
                    id: 3,
                    tag: 'Java',
                    img: ImgProjet,
                    title: 'Formation 3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                    progress: '20',
                    link: 'https://www.google.com',
                    projetId: 1,
                },
                {
                    id: 4,
                    tag: 'SQL',
                    img: ImgProjet,
                    title: 'Formation 4',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                    progress: '60',
                    link: 'https://www.google.com',
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
                tag: 'React',
                img: ImgProjet,
                title: 'React Projet 1',
                description: 'Voici un projet de blabla concerant les blablabla',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                links: [
                    {id:'1', link: 'https://www.google.com', icon: <DescriptionRoundedIcon/>},
                    {id:'2', link: 'https://www.google.com', icon: <LanguageRoundedIcon/>},
                    {id:'3', link: 'https://www.google.com', icon: <GitHubIcon/>},
                ]
            },
            {
                id: 2,
                tag: 'React',
                img: ImgProjet,
                title: 'React Projet 2',
                description: 'Voici un projet de blabla concerant les blablabla',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                links: [
                    {id:'1', link: 'https://www.google.com', icon: <DescriptionRoundedIcon/>},
                    {id:'2', link: 'https://www.google.com', icon: <LanguageRoundedIcon/>},
                    {id:'3', link: 'https://www.google.com', icon: <GitHubIcon/>},
                ]
            },
            {
                id: 3,
                tag: 'C#',
                img: ImgProjet,
                title: 'C# Projet 1',
                description: 'Voici un projet de blabla concerant les blablabla',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                links: [
                    {id:'1', link: 'https://www.google.com', icon: <DescriptionRoundedIcon/>},
                    {id:'2', link: 'https://www.google.com', icon: <LanguageRoundedIcon/>},
                    {id:'3', link: 'https://www.google.com', icon: <GitHubIcon/>},
                ]
            },
            {
                id: 4,
                tag: 'Php',
                img: ImgProjet,
                title: 'Php Projet 1',
                description: 'Voici un projet de blabla concerant les blablabla',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                links: [
                    {id:'1', link: 'https://www.google.com', icon: <DescriptionRoundedIcon/>},
                    {id:'2', link: 'https://www.google.com', icon: <LanguageRoundedIcon/>},
                    {id:'3', link: 'https://www.google.com', icon: <GitHubIcon/>},
                ],
            },
        ],
    },

    tech: {
        title: 'Veilles technologiques',
    },
}