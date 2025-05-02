import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/atoms/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  badgeCertification: string = './assets/badgeCertifcation.png';
  badgeChecklist: string = './assets/badgeChecklist.png';
  badgePc: string = './assets/badgePc.png';
}
