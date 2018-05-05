import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  listado: any;

  constructor() {
    this.listado = {
      date: '5 de mayo',
      place: 'Jala',
      speakers: [
        { name: 'Ivo Rojas', title: 'Observable en Angular: RxJS'},
        { name: 'Rene Cardozo', title: 'Framework vs Libreria'},
        { name: 'Jorge Cano', title: 'Schematics: Ready Angular Dev'},
        { name: 'Andres Jordan', title: 'You know Angular, now you know mobile'},
        { name: 'Stephen Fluin', title: 'Whats is new in Angular'},
        { name: 'Luis Aviles', title: 'NG-Conf experience and community news'}
      ]
    }
  }
}
