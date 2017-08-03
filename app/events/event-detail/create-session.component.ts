import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ISession, restrictedWords} from "../shared/index";

@Component({
    selector: "create-session",
    templateUrl: "app/events/event-detail/create-session.component.html",
    styles: [`
        em {
            float: right;
            color: #E05C65;
            padding-left: 10px;
        }

        .error input,
        .error select,
        .error textarea {
            background-color: #E3C3C5;
        }

        .error ::-webkit-input-placeholder {
            color: #999
        }
    `]

})
export class CreateSessionComponent implements OnInit {

    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();
    public newSessionForm: FormGroup;
    public name: FormControl;
    public presenter: FormControl;
    public duration: FormControl;
    public level: FormControl;
    public abstract: FormControl;

    ngOnInit(): void {
        this.name = new FormControl("", Validators.required);
        this.presenter = new FormControl("", Validators.required);
        this.duration = new FormControl("", Validators.required);
        this.level = new FormControl("", Validators.required);
        this.abstract = new FormControl("", [Validators.required,
            Validators.maxLength(400),
            restrictedWords(["foo", "bar", "baz"])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    public saveSession(formValues): void {
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            // Duration is a number and must be cast as such.
            duration: parseFloat(formValues.duration),
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        };

        this.saveNewSession.emit(session);
    }

    public cancel() {
        this.cancelAddSession.emit();
    }

}