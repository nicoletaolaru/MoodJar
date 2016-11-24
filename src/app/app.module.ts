import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginForm} from './app.component';



import { ReactiveFormsModule } from '@angular/forms';


@NgModule({

    declarations: [LoginForm],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,



    ],
    providers: [],
    bootstrap: [LoginForm]
})
export class AppModule { }
