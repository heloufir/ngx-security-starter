import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'en',
    data: {
        'LOGIN': {
            'TITLE': 'Login to your account',
            'FIELDS': {
                'EMAIL': 'Email address',
                'PASSWORD': 'Password'
            },
            'ERRORS': {
                'EMAIL': {
                    'REQUIRED': 'The email address is required',
                    'VALID': 'Please enter a valid email address'
                },
                'PASSWORD': {
                    'REQUIRED': 'The password is required'
                }
            },
            'LINKS': {
                'FORGOT_PASSWORD': 'Forgot your password?'
            }
        }
    }
}
