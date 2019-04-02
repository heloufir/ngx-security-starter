import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'fr',
    data: {
        'ROLES': {
            'BREAD_CRUMBS': {
                'HOME': 'Accueil',
                'SECURITY': 'Securité',
                'ROLES': 'Gérer les rôles'
            },
            'CONTENT': {
                'TITLE': 'Liste des rôles',
                'FIELDS': {
                    'CODE': 'Code',
                    'DESIGNATION': 'Désignation'
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
                    'CREATED_AT': 'Date de création',
                    'UPDATED_AT': 'Dernière mise à jours',
                    'ACTIONS': 'Actions',
                    'LOADING': 'Chargement des données... Veuillez patienter',
                    'NO_DATA': 'Aucun rôle créé pour le moment !'
                },
                'MODAL': {
                    'TITLE': {
                        'UPDATE': 'Mettre à jours le rôle : ',
                        'CREATE': 'Créer un nouveau rôle',
                        'DELETE': 'Supprimer le rôle'
                    },
                    'DESCRIPTION': {
                        'DELETE': 'Êtes-vous sûr de vouloir supprimer ce rôle ?'
                    }
                },
                'BUTTONS': {
                    'ADD': 'Nouveau rôle',
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
                    'SAVED': 'Le rôle a été enregistré avec succès.',
                    'ERROR': 'Une erreur est survenue lors de l\'enregistrement du rôle, veuillez contacter l\'administrateur système.'
                }
            }
        }
    }
}
