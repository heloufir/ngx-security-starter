import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'fr',
    data: {
        'LOGIN': {
            'TITLE': 'Connectez-vous à votre compte',
            'FIELDS': {
                'EMAIL': 'Adresse email',
                'PASSWORD': 'Mot de passe'
            },
            'ERRORS': {
                'EMAIL': {
                    'REQUIRED': 'L\'adresse email est obligatiore',
                    'VALID': 'Veuillez entrer une adresse email valide'
                },
                'PASSWORD': {
                    'REQUIRED': 'Le mot de passe est obligatoire'
                }
            },
            'LINKS': {
                'FORGOT_PASSWORD': 'Mot de passe oublié ?'
            }
        }
    }
}
