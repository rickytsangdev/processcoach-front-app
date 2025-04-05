import { Component } from '@angular/core';
import { SearchBarComponent } from '../../molecules/search-bar/search-bar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
buttonText : any = "test"

}
