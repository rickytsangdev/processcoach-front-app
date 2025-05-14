import { Component } from '@angular/core';

@Component({
  selector: 'app-informations',
  standalone: true,
  imports: [],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss',
})
export class InformationsComponent {
  email: string = 'ricky.tsang@live.fr';
  niveau: string = 'intermédiaire';
  status: string = 'active';
}
