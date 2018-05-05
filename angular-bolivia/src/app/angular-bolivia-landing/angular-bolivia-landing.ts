import { Component, Input } from '@angular/core';

@Component({
    selector: 'angular-bolivia-landing',
    templateUrl: './angular-bolivia-landing.html',
    styleUrls: ['./angular-bolivia-landing.css']
})

export class AngularBoliviaLandingComponent {

    @Input() listado: any;

    constructor() {
        console.log('Hello <%= classify(name) %=>!');
    }
}