import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'fr',
    legacy: true,
    messages: {
        en: {
            home: 'Home',
            destinations: 'Destinations',
            login: 'Login',
            myProfile: 'My Profile',
            contactUs: 'Contact Us',
        },
        es: {
            home: 'Inicio',
            destinations: 'Destinos',
            login: 'Iniciar Sesión',
            myProfile: 'Mi Perfil',
            contactUs: 'Contáctenos',
        },
        fr: {
            home: 'Accueil',
            destinations: 'Destinations',
            login: 'Connexion',
            myProfile: 'Mon profil',
            contactUs: 'Contactez-nous',
        }
    }
})

export default i18n;