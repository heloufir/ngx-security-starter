import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'en',
    data: {
        'ACCOUNT_SETTINGS': {
            'BREAD_CRUMBS': {
                'HOME': 'Home',
                'ACCOUNT_SETTINGS': 'Account settings'
            },
            'CONTENT': {
                'TITLE': 'My account',
                'NOTE': 'Please note that you need to close your session and re-open it again (<em>logout from your account and login again</em>) '
                    + 'to let your changes take place. <br><b>All changes are not automatically updated into your current session.</b>',
                'FIELDS': {
                    'NAME': 'Name',
                    'EMAIL': 'Email address',
                    'PASSWORD': 'Password',
                    'PASSWORD_CONFIRMATION': 'Password confirmation'
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
                'BUTTONS': {
                    'SAVE': 'Save'
                }
            },
            'TOASTS': {
                'TITLE': {
                    'SUCCESS': 'Success!',
                    'WARNING': 'Warning!',
                    'ERROR': 'Error!'
                },
                'DESCRIPTION': {
                    'SAVED': 'Your account is successfully updated.',
                    'ERROR': 'An error has occurred when saving the user, please contact system administrator.'
                }
            }
        }
    }
}
