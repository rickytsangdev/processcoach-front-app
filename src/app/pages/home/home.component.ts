import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/organisms /navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  welcomePage: string = './assets/welcomePage.png';
  badgeCertification: string = './assets/badgeCertifcation.png';
  badgeChecklist: string = './assets/badgeChecklist.png';
}
