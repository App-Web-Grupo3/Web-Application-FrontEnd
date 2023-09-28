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
            service: 'Servicio',
            comment: 'Comentario',
            applyDiscount: 'Aplicar Descuento de',
            summary: 'Resumen',
            amount: 'Monto por X personas: ',
            discount: 'Descuento: ',
            total: 'Total: ',
            favorites: 'Favoritos',
            by: 'Por:',
            cost: 'Costo:',
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
            service: 'Service',
            comment: 'Comment',
            applyDiscount: 'Apply Discount of',
            summary: 'Summary',
            amount: 'Amount for X people: ',
            discount: 'Discount: ',
            total: 'Total: ',
            favorites: 'Favorites',
            by: 'By:',
            cost: 'Cost:',
        }
    }
})

export default i18n;