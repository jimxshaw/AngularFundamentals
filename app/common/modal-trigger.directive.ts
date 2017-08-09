import {Directive, OnInit, Inject, ElementRef} from "@angular/core";
import {JQ_TOKEN} from "./jQuery.service";

@Directive({
    selector: "[modal-trigger]"
})
export class ModalTriggerDirective implements OnInit {

    private element: HTMLElement;

    // When this directive is constructed, we want a reference to the element
    // from whence it's used. The ElementRef type is a wrapper around the
    // actual HTML element.
    constructor(elementRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.element = elementRef.nativeElement;
    }

    ngOnInit(): void {
        this.element.addEventListener("click", event => {
            this.$("#simple-modal").modal({});
        });

    }


}