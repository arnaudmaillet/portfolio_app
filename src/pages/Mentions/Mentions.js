import React from 'react'
import { Grid, Paper, makeStyles } from '@material-ui/core'
import Title from './../../components/Title/Title.js'
import { motion } from "framer-motion";

import MyData from '../../utils/Data.js'

import './Mentions.scss'

const style = makeStyles(theme => ({
    text: {
        color: theme.palette.info.main,
        padding: '15px 0 0 0',
        textAlign: 'justify',
        lineHeight: '23px'
    }
}))

const Mentions = () => {

    const classes = style()

    return (
        <Paper elevation={MyData.settings.cardElevation}>
            <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.2 }}>
                <Grid container className='mentions'>
                    <Title classSection='mentions'>Mentions Légales</Title>
                    <Grid item xs={12}>
                        <div className='mentions_editeur_title'>Editeur du site</div>
                        <div className='mentions_editeur_text' className={classes.text}>
                            <div>Responsable éditorial : {MyData.profile.firstName + ' ' + MyData.profile.name}</div>
                            <div>Email : {MyData.profile.email}</div>
                            <div>Adresse : {MyData.profile.adress}</div>
                            <div>Téléphone : {MyData.profile.phone}</div>
                        </div>
                        <div className='mentions_heb_title'>Hébergement</div>
                        <div className='mentions_heb_text' className={classes.text}>
                            <div>Hébergeur : {MyData.Mentions.hebergeur.name}</div>
                            <div>Adresse : {MyData.Mentions.hebergeur.adress}</div>
                        </div>
                        <div className='mentions_conditions_title'>Conditions d'utilisation</div>
                        <div className='mentions_conditions_text' className={classes.text}>
                            <div>Ce site {MyData.Mentions.adresse} est proposé en différents langages web (HTML5, Javascript, SCSS) pour un meilleur confort d’utilisation et un graphisme plus agréable.</div>
                            <div>Nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc…</div>
                            <div>Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de AntheDesign , et signaler toutes modifications du site qu’il jugerait utile. {MyData.Mentions.adresse} n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.</div>
                        </div>
                        <div className='mentions_cookies_title'>Cookies</div>
                        <div className='mentions_cookies_text' className={classes.text}>
                            <div>Le site {MyData.Mentions.adresse} peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.</div>
                            <div>Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations . Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.</div>
                        </div>
                        <div className='mentions_liens_title'>Liens hypertextes</div>
                        <div className='mentions_liens_text' className={classes.text}>
                            <div>Les sites internet de peuvent offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. {MyData.Mentions.adresse} ne dispose d’aucun moyen pour contrôler les sites en connexion avec ses sites internet.</div>
                            <div>{MyData.Mentions.adresse} ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions d’utilisation.</div>
                            <div>Les utilisateurs, les abonnés et les visiteurs des sites internet  ne peuvent pas mettre en place un hyperlien en direction de ce site sans l’autorisation expresse et préalable de {MyData.Mentions.adresse}.</div>
                            <div>Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des sites internet de {MyData.Mentions.adresse}, il lui appartiendra d’adresser un email accessible sur le site afin de formuler sa demande de mise en place d’un hyperlien.</div>
                            <div>{MyData.Mentions.adresse} se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.</div>
                        </div>
                        <div className='mentions_donnees_title'>Limitation contractuelles sur les données</div>
                        <div className='mentions_donnees_text' className={classes.text}>
                            <div>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l’année, mais peut toutefois contenir des inexactitudes ou des omissions.</div>
                            <div>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par courriel, à l’adresse {MyData.profile.email}, en décrivant le problème de la manière la plus précise possible (page posant problème, type d’ordinateur et de navigateur utilisé, …).</div>
                            <div>Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule responsabilité. En conséquence, ne saurait être tenu responsable d’un quelconque dommage subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives au téléchargement.</div>
                            <div>De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.</div>
                            <div>Les liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de {MyData.Mentions.adresse}.</div>
                        </div>
                        <div className='mentions_propriete_title'>Limitation contractuelles sur les données</div>
                        <div className='mentions_propriete_text' className={classes.text}>
                            <div>Tout le contenu du présent site {MyData.Mentions.adresse}, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.</div>
                            <div>Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de {MyData.Mentions.adresse}. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.</div>
                        </div>
                        <div className='mentions_CNIL_title'>Déclaration à la CNIL</div>
                        <div className='mentions_CNIL_text' className={classes.text}>
                            <div>Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l’égard des traitements de données à caractère personnel) relative à l’informatique, aux fichiers et aux libertés, ce site a fait l’objet d’une déclaration 1656629 auprès de la Commission nationale de l’informatique et des libertés (www.cnil.fr).</div>
                        </div>
                        <div className='mentions_litiges_title'>Litiges</div>
                        <div className='mentions_litiges_text' className={classes.text}>
                            <div>Les présentes conditions du site {MyData.Mentions.adresse} sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l’interprétation ou de l’exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français.</div>
                        </div>
                        <div className='mentions_personnel_title'>Données personnelles</div>
                        <div className='mentions_personnel_text' className={classes.text}>
                            <div>De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez notre site Internet {MyData.Mentions.adresse}.</div>
                            <div>Dans tous les cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas, vous ne pourrez pas utiliser les services du site, notamment celui de solliciter des renseignements sur notre société, ou de recevoir les lettres d’information.</div>
                            <div>Enfin, nous pouvons collecter de manière automatique certaines informations vous concernant lors d’une simple navigation sur notre site internet, notamment : des informations concernant l’utilisation de notre site, comme les zones que vous visitez et les services auxquels vous accédez, votre adresse IP, le type de votre navigateur, vos temps d’accès.</div>
                            <div>De telles informations sont utilisées exclusivement à des fins de statistiques internes, de manière à améliorer la qualité des services qui vous sont proposés. Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</div>
                        </div>
                    </Grid>
                </Grid>
            </motion.div>
        </Paper>
    )
}

export default Mentions
