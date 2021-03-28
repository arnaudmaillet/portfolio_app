import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonPinIcon from '@material-ui/icons/PersonPin';

export default {

    profile: {
        name: 'Maillet Arnaud',
        title: 'Developper par passion',
    
        age: '2000 ans',
        email: 'arnaud@arnaud.arnaud',
        adress: '1 rue de la rue',
        job: 'etudiant',
        phone: '0101010101'
    },

    icon:{
        header_timeline: <PersonPinIcon/>
    },

    // Array of social object.
    socials: {
        Facebook:{
            id: 1,
            link: 'https://www.facebook.com/',
            text: 'Facebook',
            icon: <FacebookIcon/>
        },

        Twitter:{
            id: 2,
            link: 'https://twitter.com/',
            text: 'Twitter',
            icon: <TwitterIcon/>
        },

        Linkedin:{
            id: 3,
            link: 'https://www.linkedin.com/',
            text: 'Linkedin',
            icon: <LinkedInIcon/>
        },

        Github:{
            id: 4,
            link: 'https://github.com/arnaudmaillet',
            text: 'Github',
            icon: <GitHubIcon/>
        },
    }

}