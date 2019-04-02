// Toastr service
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

/**
 * Show a success toastr
 * 
 * @param title The toastr title
 * @param content The toastr content
 * @param toastr The toastr service object
 * 
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export function success(title: string, content: string, toastr: ToastrService, translate: TranslateService): void {
    translate.stream([content, title])
        .subscribe((t: any) => toastr.success(t[content], t[title]));
}

/**
 * Show an error toastr
 *
 * @param title The toastr title
 * @param content The toastr content
 * @param toastr The toastr service object
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export function error(title: string, content: string, toastr: ToastrService, translate: TranslateService): void {
    translate.stream([content, title])
        .subscribe((t: any) => toastr.error(t[content], t[title]));
}

/**
 * Show a warning toastr
 *
 * @param title The toastr title
 * @param content The toastr content
 * @param toastr The toastr service object
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export function warning(title: string, content: string, toastr: ToastrService, translate: TranslateService): void {
    translate.stream([content, title])
        .subscribe((t: any) => toastr.warning(t[content], t[title]));
}

/**
 * Show an info toastr
 *
 * @param title The toastr title
 * @param content The toastr content
 * @param toastr The toastr service object
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export function info(title: string, content: string, toastr: ToastrService, translate: TranslateService): void {
    translate.stream([content, title])
        .subscribe((t: any) => toastr.info(t[content], t[title]));
}
