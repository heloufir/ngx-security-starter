import { Locale } from '@app/core/services/translation-loader.service';

export const locale: Locale = {
    lang: 'en',
    data: {
        'FORGOT_PASSWORD': {
            'TITLE': 'Forgot password? Don\'t worry!',
            'FIELDS': {
                'EMAIL': 'Email address'
            },
            'ERRORS': {
                'EMAIL': {
                    'REQUIRED': 'The email address is required',
                    'VALID': 'Please enter a valid email address'
                }
            },
            'LINKS': {
                'LOGIN': 'Login to your account'
            }
        }
    }
}
