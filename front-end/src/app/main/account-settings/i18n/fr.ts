import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'fr',
    data: {
        'ACCOUNT_SETTINGS': {
            'BREAD_CRUMBS': {
                'HOME': 'Accueil',
                'ACCOUNT_SETTINGS': 'Paramètrage'
            },
            'CONTENT': {
                'TITLE': 'Mon compte',
                'NOTE': 'Veuillez noter que vous devez fermer votre session et la rouvrir (<em>déconnectez-vous de votre compte, puis reconnectez-vous</em>) '
                    + 'pour que vos modifications aient lieu. <br><b>Toutes les modifications ne sont pas automatiquement mises à jour dans votre session en cours.</b>',
                'FIELDS': {
                    'NAME': 'Nom',
                    'EMAIL': 'Adresse email',
                    'PASSWORD': 'Mot de passe',
                    'PASSWORD_CONFIRMATION': 'Confirmation du mot de passe'
                },
                'ERRORS': {
                    'NAME': {
                        'REQUIRED': 'Le nom est obligatoire',
                        'LENGTH': 'Le nom ne doit pas dépasser 255 caractères'
                    },
                    'EMAIL': {
                        'REQUIRED': 'L\'adresse email est obligatoire',
                        'LENGTH': 'L\'adresse email ne doit pas dépasser 255 caractères'
                    },
                    'PASSWORD': {
                        'REQUIRED': 'Le mot de passe est obligatoire'
                    },
                    'PASSWORD_CONFIRMATION': {
                        'REQUIRED': 'La confirmation du mot de passe est obligatoire'
                    }
                },
                'BUTTONS': {
                    'SAVE': 'Enregistrer'
                }
            },
            'TOASTS': {
                'TITLE': {
                    'SUCCESS': 'Succès !',
                    'WARNING': 'Alerte !',
                    'ERROR': 'Erreur !'
                },
                'DESCRIPTION': {
                    'SAVED': 'Votre compte a été mis à jous avec succès.',
                    'ERROR': 'Une erreur est survenue lors de l\'enregistrement de votre compte, veuillez contacter l\'administrateur système.'
                }
            }
        }
    }
}
