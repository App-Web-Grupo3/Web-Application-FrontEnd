import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'es',
    legacy: true,
    messages: {
        es: {
            home: 'Inicio',
            destinations: 'Destinos',
            login: 'Iniciar Sesión',
            myProfile: 'Mi Perfil',
            contactUs: 'Contáctenos',
            details: 'Detalles',
            email: 'Correo: ',
            phone: 'Teléfono: ',
            country: 'País: ',
        },
        en: {
            home: 'Home',
            destinations: 'Destinations',
            login: 'Login',
            myProfile: 'My Profile',
            contactUs: 'Contact Us',
            details: 'Details',
            email: 'Email: ',
            phone: 'Phone: ',
            country: 'Country: ',
        }
    }
})

export default i18n;