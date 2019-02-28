// Toastr service
import { ToastrService } from 'ngx-toastr';

/**
 * Show a success toastr
 * 
 * @param title The toastr title
 * @param content The toastr content
 * @param toastr The toastr service object
 * 
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export function success(title: string, content: string, toastr: ToastrService): void {
    toastr.success(content, title);
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
export function error(title: string, content: string, toastr: ToastrService): void {
    toastr.error(content, title);
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
export function warning(title: string, content: string, toastr: ToastrService): void {
    toastr.warning(content, title);
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
export function info(title: string, content: string, toastr: ToastrService): void {
    toastr.info(content, title);
}
