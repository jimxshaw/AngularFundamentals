import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: "/app/user/login.component.html"
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