import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'en',
    data: {
        'RECOVER': {
            'TITLE': 'Recover your password',
            'FIELDS': {
                'EMAIL': 'Email address',
                'PASSWORD': 'New password',
                'PASSWORD_CONFIRMATION': 'Password confirmation'
            },
            'ERRORS': {
                'EMAIL': {
                    'REQUIRED': 'The email address is required',
                    'VALID': 'Please enter a valid email address'
                },
                'PASSWORD': {
                    'REQUIRED': 'The password is required'
                },
                'PASSWORD_CONFIRMATION': {
                    'REQUIRED': 'The password confirmation is required',
                }
            },
            'LINKS': {
                'LOGIN': 'Login to your account'
            }
        }
    }
}
