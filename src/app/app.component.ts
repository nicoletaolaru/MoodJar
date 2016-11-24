import {Component} from '@angular/core';
import {
    Validators,
    FormBuilder,
    FormControl, FormGroup
} from '@angular/forms';



@Component({
    selector: 'login-form',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class LoginForm {
    loginForm: FormGroup;
    name: FormControl;
    username: FormControl;
    password: FormControl;

    constructor (builder: FormBuilder) {
        this.name = new FormControl('',[
            Validators.required
        ]);

        this.username = new FormControl('', [
            Validators.required,
            Validators.minLength(5)
        ]);
        this.password = new FormControl('', [Validators.required]);
        this.loginForm = builder.group({
            name: this.name,
            username: this.username,
            password: this.password
        });
    }

    login () {
        console.log(this.loginForm.value);
        // Attempt Logging in...
    }
}




