import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'fr',
    data: {
        'USERS': {
            'BREAD_CRUMBS': {
                'HOME': 'Accueil',
                'SECURITY': 'Securité',
                'USERS': 'Gérer les utilisateurs'
            },
            'CONTENT': {
                'TITLE': 'Liste des utilisateurs',
                'FIELDS': {
                    'NAME': 'Nom',
                    'EMAIL': 'Adresse email',
                    'PASSWORD': 'Mot de passe',
                    'PASSWORD_CONFIRMATION': 'Confirmation du mot de passe',
                    'PROFILES': 'Profil(s)'
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
                'DATATABLE': {
                    'ID': '#',
                    'NAME': 'Nom',
                    'EMAIL': 'Adresse email',
                    'PROFILES': 'Profils attachés',
                    'CREATED_AT': 'Date de création',
                    'UPDATED_AT': 'Dernière mise à jours',
                    'ACTIONS': 'Actions',
                    'LOADING': 'Chargement des données... Veuillez patienter',
                    'NO_DATA': 'Aucun utilisateur créé pour le moment !'
                },
                'MODAL': {
                    'TITLE': {
                        'UPDATE': 'Mettre à jours l\'utilisateur : ',
                        'CREATE': 'Créer un nouvel utilisateur',
                        'DELETE': 'Supprimer l\'utilisateur'
                    },
                    'DESCRIPTION': {
                        'DELETE': 'Êtes-vous sûr de vouloir supprimer cet utilisateur ?'
                    }
                },
                'BUTTONS': {
                    'ADD': 'Nouvel utilisateur',
                    'SAVE': 'Enregistrer',
                    'DELETE': 'Supprimer'
                }
            },
            'TOASTS': {
                'TITLE': {
                    'SUCCESS': 'Succès !',
                    'WARNING': 'Alerte !',
                    'ERROR': 'Erreur !'
                },
                'DESCRIPTION': {
                    'SAVED': 'L\'utilisateur a été enregistré avec succès.',
                    'ERROR': 'Une erreur est survenue lors de l\'enregistrement d\'utilisateur, veuillez contacter l\'administrateur système.'
                }
            }
        }
    }
}
