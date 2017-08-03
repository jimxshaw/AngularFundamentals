import {Component, Input} from "@angular/core";

@Component({
    selector: "collapsible-well",
    template: `
        <div (click)="toggleContent()" class="well pointable">
            <h4 class="well-title">{{name}}</h4>
            <ng-content *ngIf="visible"></ng-content>
        </div>
    `
})
export class CollapsibleWellComponent {
    @Input() name: string;
    visible: boolean = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}