import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'fr',
    data: {
        'FORGOT_PASSWORD': {
            'TITLE': 'Mot de passe oublié? Ne vous inquiètez pas!',
            'FIELDS': {
                'EMAIL': 'Adresse email'
            },
            'ERRORS': {
                'EMAIL': {
                    'REQUIRED': 'L\'adresse email est obligatiore',
                    'VALID': 'Veuillez entrer une adresse email valide'
                }
            },
            'LINKS': {
                'LOGIN': 'Connectez-vous à votre compte'
            }
        }
    }
}
