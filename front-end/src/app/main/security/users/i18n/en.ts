import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'en',
    data: {
        'USERS': {
            'BREAD_CRUMBS': {
                'HOME': 'Home',
                'SECURITY': 'Security',
                'USERS': 'Manage users'
            },
            'CONTENT': {
                'TITLE': 'Users list',
                'FIELDS': {
                    'NAME': 'Name',
                    'EMAIL': 'Email address',
                    'PASSWORD': 'Password',
                    'PASSWORD_CONFIRMATION': 'Password confirmation',
                    'PROFILES': 'Profile(s)'
                },
                'ERRORS': {
                    'NAME': {
                        'REQUIRED': 'The name is required',
                        'LENGTH': 'The name must be less than 255 characters'
                    },
                    'EMAIL': {
                        'REQUIRED': 'The email is required',
                        'LENGTH': 'The email must be less than 255 characters'
                    },
                    'PASSWORD': {
                        'REQUIRED': 'The password is required'
                    },
                    'PASSWORD_CONFIRMATION': {
                        'REQUIRED': 'The password confirmation is required'
                    }
                },
                'DATATABLE': {
                    'ID': '#',
                    'NAME': 'Name',
                    'EMAIL': 'Email address',
                    'PROFILES': 'Profiles attached',
                    'CREATED_AT': 'Creation date',
                    'UPDATED_AT': 'Last update',
                    'ACTIONS': 'Actions',
                    'LOADING': 'Loading data.. Please wait',
                    'NO_DATA': 'No users created yet!'
                },
                'MODAL': {
                    'TITLE': {
                        'UPDATE': 'Update user: ',
                        'CREATE': 'Create a new user',
                        'DELETE': 'Delete user'
                    },
                    'DESCRIPTION': {
                        'DELETE': 'Are you sure you want to delete this user?'
                    }
                },
                'BUTTONS': {
                    'ADD': 'Add new user',
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
                    'SAVED': 'The user is successfully saved.',
                    'ERROR': 'An error has occurred when saving the user, please contact system administrator.'
                }
            }
        }
    }
}
