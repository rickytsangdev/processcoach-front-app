import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/organisms /navbar/navbar.component';
import { ButtonComponent } from "../../shared/atoms/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  welcomePage: string = './assets/image/welcomePage.png';
  badgeCertification: string = './assets/images/badgeCertifcation.png';
  badgeChecklist: string = './assets/images/badgeChecklist.png';
  badgePc: string = './assets/images/badgePc.png';
}
