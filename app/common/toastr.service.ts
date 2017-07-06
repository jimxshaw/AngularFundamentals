import {Injectable} from "@angular/core";

// Delcare the toastr variable so that we contain this global
// object within the scope of this service only.
declare let toastr: any;

@Injectable()
export class ToastrService {
    success(message: string, title?: string) {
        toastr.success(message, title);
    }

    info(message: string, title?: string) {
        toastr.info(message, title);
    }

    warning(message: string, title?: string) {
        toastr.warning(message, title);
    }

    error(message: string, title?: string) {
        toastr.error(message, title);
    }
}