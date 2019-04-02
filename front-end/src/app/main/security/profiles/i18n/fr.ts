import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'fr',
    data: {
        'PROFILES': {
            'BREAD_CRUMBS': {
                'HOME': 'Accueil',
                'SECURITY': 'Securité',
                'PROFILES': 'Gérer les profils'
            },
            'CONTENT': {
                'TITLE': 'Liste des profils',
                'FIELDS': {
                    'CODE': 'Code',
                    'DESIGNATION': 'Désignation',
                    'ROLES': 'Rôle(s)'
                },
                'ERRORS': {
                    'CODE': {
                        'REQUIRED': 'Le nom est obligatoire',
                        'LENGTH': 'Le nom ne doit pas dépasser 255 caractères'
                    },
                    'DESIGNATION': {
                        'REQUIRED': 'La désignation est obligatoire',
                        'LENGTH': 'La désignation ne doit pas dépasser 255 caractères'
                    }
                },
                'DATATABLE': {
                    'ID': '#',
                    'CODE': 'Code',
                    'DESIGNATION': 'Désignation',
                    'ROLES': 'Rôles attachés',
                    'CREATED_AT': 'Date de création',
                    'UPDATED_AT': 'Dernière mise à jours',
                    'ACTIONS': 'Actions',
                    'LOADING': 'Chargement des données... Veuillez patienter',
                    'NO_DATA': 'Aucun profil créé pour le moment !'
                },
                'MODAL': {
                    'TITLE': {
                        'UPDATE': 'Mettre à jours le profil : ',
                        'CREATE': 'Créer un nouveau profil',
                        'DELETE': 'Supprimer le profil'
                    },
                    'DESCRIPTION': {
                        'DELETE': 'Êtes-vous sûr de vouloir supprimer ce profil ?'
                    }
                },
                'BUTTONS': {
                    'ADD': 'Nouveau profil',
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
                    'SAVED': 'Le profil a été enregistré avec succès.',
                    'ERROR': 'Une erreur est survenue lors de l\'enregistrement du profil, veuillez contacter l\'administrateur système.'
                }
            }
        }
    }
}
