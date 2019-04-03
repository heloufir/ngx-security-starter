import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'en',
    data: {
        'ROLES': {
            'BREAD_CRUMBS': {
                'HOME': 'Home',
                'SECURITY': 'Security',
                'ROLES': 'Manage roles'
            },
            'CONTENT': {
                'TITLE': 'Roles list',
                'FIELDS': {
                    'CODE': 'Code',
                    'DESIGNATION': 'Designation'
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
                    'DESIGNATION': 'DESIGNATION',
                    'CREATED_AT': 'Creation date',
                    'UPDATED_AT': 'Last update',
                    'ACTIONS': 'Actions',
                    'LOADING': 'Loading data.. Please wait',
                    'NO_DATA': 'No roles created yet!'
                },
                'MODAL': {
                    'TITLE': {
                        'UPDATE': 'Update role: ',
                        'CREATE': 'Create a new role',
                        'DELETE': 'Delete role'
                    },
                    'DESCRIPTION': {
                        'DELETE': 'Are you sure you want to delete this role?'
                    }
                },
                'BUTTONS': {
                    'ADD': 'Add new role',
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
                    'SAVED': 'The role is successfully saved.',
                    'ERROR': 'An error has occurred when saving the role, please contact system administrator.'
                }
            }
        }
    }
}
