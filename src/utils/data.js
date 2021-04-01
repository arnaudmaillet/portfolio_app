// Import icons
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

// Import profile image
import ImgProfil from './../assets/img/profil.jpg';
import ImgProjet from './../assets/img/projet.jpg'


export default {

    // values of sticky navbar : none or top
    navbar: 'top',

    profile: {
        name: 'Maillet Arnaud',
        title: 'Developper par passion',
    
        img : ImgProfil,
        age: '2000 ans',
        email: 'arnaud@arnaud.com',
        adress: '12 rue de la rue',
        job: 'etudiant',
        phone: '0101010101'
    },

    icons: {
        header_timeline: <AccountCircleRoundedIcon/>,
        work_timeline: <WorkRoundedIcon/>,
        education_timeline: <SchoolRoundedIcon/>,
        btn_download: <GetAppRoundedIcon/>,
        btn_contact: <ContactlessRoundedIcon/>
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

            title: 'Compétences',
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

    projects: {

        title: 'Projets',
        items: [
            {
                id:'1',
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
                id:'2',
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
                id:'3',
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
                id:'4',
                tag: 'Php',
                img: ImgProjet,
                title: 'Php Projet 1',
                description: 'Voici un projet de blabla concerant les blablabla',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                links: [
                    {id:'1', link: 'https://www.google.com', icon: <DescriptionRoundedIcon/>},
                    {id:'2', link: 'https://www.google.com', icon: <LanguageRoundedIcon/>},
                    {id:'3', link: 'https://www.google.com', icon: <GitHubIcon/>},
                ]
            }
        ]
    }
}