import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'en',
    data: {
        'PROFILES': {
            'BREAD_CRUMBS': {
                'HOME': 'Home',
                'SECURITY': 'Security',
                'PROFILES': 'Manage profiles'
            },
            'CONTENT': {
                'TITLE': 'Profiles list',
                'FIELDS': {
                    'CODE': 'Code',
                    'DESIGNATION': 'Designation',
                    'ROLES': 'Role(s)'
                },
                'ERRORS': {
                    'CODE': {
                        'REQUIRED': 'The code is required',
                        'LENGTH': 'The code must be less than 255 characters'
                    },
                    'DESIGNATION': {
                        'REQUIRED': 'The designation is required',
                        'LENGTH': 'The designation must be less than 255 characters'
                    }
                },
                'DATATABLE': {
                    'ID': '#',
                    'CODE': 'Code',
                    'DESIGNATION': 'Designation',
                    'ROLES': 'Roles attached',
                    'CREATED_AT': 'Creation date',
                    'UPDATED_AT': 'Last update',
                    'ACTIONS': 'Actions',
                    'LOADING': 'Loading data.. Please wait',
                    'NO_DATA': 'No profiles created yet!'
                },
                'MODAL': {
                    'TITLE': {
                        'UPDATE': 'Update profile: ',
                        'CREATE': 'Create a new profile',
                        'DELETE': 'Delete profile'
                    },
                    'DESCRIPTION': {
                        'DELETE': 'Are you sure you want to delete this profile?'
                    }
                },
                'BUTTONS': {
                    'ADD': 'Add new profile',
                    'SAVE': 'Save',
                    'DELETE': 'Delete'
                }
            },
            'TOASTS': {
                'TITLE': {
                    'SUCCESS': 'Success!',
                    'WARNING': 'Warning!',
                    'ERROR': 'Error!'
                },
                'DESCRIPTION': {
                    'SAVED': 'The profile is successfully saved.',
                    'ERROR': 'An error has occurred when saving the profile, please contact system administrator.'
                }
            }
        }
    }
}
