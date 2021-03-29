// Import icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import ContactlessRoundedIcon from '@material-ui/icons/ContactlessRounded';

// Import profile image
import ImgProfil from './../assets/img/profil.jpg'

export default {

    // values of sticky navbar : none or top
    navbar: 'top',

    profile: {
        name: 'Maillet Arnaud',
        title: 'Developper par passion',
    
        img : ImgProfil,
        age: '2000 ans',
        email: 'arnaud@arnaud.arnaud',
        adress: '12 rue de la rue',
        job: 'etudiant',
        phone: '0101010101'
    },

    icons: {
        header_timeline: <AccountCircleRoundedIcon/>,
        btn_download: <GetAppRoundedIcon/>,
        btn_contact: <ContactlessRoundedIcon/>
    },

    // Array of social object.
    socials: {
        Facebook: {
            id: 1,
            link: 'https://www.facebook.com/',
            text: 'Facebook',
            icon: <FacebookIcon/>
        },

        Twitter: {
            id: 2,
            link: 'https://twitter.com/',
            text: 'Twitter',
            icon: <TwitterIcon/>
        },

        Linkedin: {
            id: 3,
            link: 'https://www.linkedin.com/',
            text: 'Linkedin',
            icon: <LinkedInIcon/>
        },

        Github: {
            id: 4,
            link: 'https://github.com/arnaudmaillet',
            text: 'Github',
            icon: <GitHubIcon/>
        },
    },



    // Pages

    // About me
    AboutSection: {
        title: 'A propos',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }


}