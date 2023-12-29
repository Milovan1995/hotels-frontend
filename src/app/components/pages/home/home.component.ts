import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Hotels app';
  description = 'Polaznici kursa';
  polaznici = [
    'Lejla',
    'Lazar',
    'Nikola',
    'Andjela',
    'Boris',
    'Milovan',
    'Sofija',
  ];
  angularConcepts = ['components', 'services', 'pipes', 'models', 'directives'];
}
