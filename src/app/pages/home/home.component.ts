import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/organisms /navbar/navbar.component';
import { ButtonComponent } from "../../shared/atoms/button/button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  welcomePage: string = './assets/welcomePage.png';

}
