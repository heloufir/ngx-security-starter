import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'fr',
    data: {
        'RECOVER': {
            'TITLE': 'Récupère ton mot de passe',
            'FIELDS': {
                'EMAIL': 'Adresse email',
                'PASSWORD': 'Nouveau mot de passe',
                'PASSWORD_CONFIRMATION': 'Confirmation du mot de passe'
            },
            'ERRORS': {
                'EMAIL': {
                    'REQUIRED': 'L\'adresse email est obligatiore',
                    'VALID': 'Veuillez entrer une adresse email valide'
                },
                'PASSWORD': {
                    'REQUIRED': 'Le mot de passe est obligatoire'
                },
                'PASSWORD_CONFIRMATION': {
                    'REQUIRED': 'La confirmation du mot de passe est obligatiore'
                }
            },
            'LINKS': {
                'FORGOT_PASSWORD': 'Connectez-vous à votre compte'
            }
        }
    }
}
