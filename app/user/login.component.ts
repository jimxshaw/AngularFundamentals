import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: "/app/user/login.component.html",
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
    `]
})
export class LoginComponent {

    constructor(private authService: AuthService, private router: Router) {

    }

    login(formValues) {
        // From this component's template, loginForm.value is passed as argument into this method.
        // All the field values from that template form is already encompassed in the passed in
        // argument. Thus, we can access those field values using the usual dot notation.
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(["events"]);

    }

    cancel() {
        this.router.navigate(["events"]);
    }
}