import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  document!: any;
  auth = inject(AuthService); 
  

  goToUrl(): void {
    this.document.location.href = 'https://processcoach.fr';
  }
}
