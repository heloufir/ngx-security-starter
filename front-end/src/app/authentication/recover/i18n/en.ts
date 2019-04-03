import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'en',
    data: {
        'RECOVER': {
            'TITLE': 'Recover your password',
            'FIELDS': {
                'PASSWORD': 'New password',
                'PASSWORD_CONFIRMATION': 'Password confirmation'
            },
            'ERRORS': {
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
