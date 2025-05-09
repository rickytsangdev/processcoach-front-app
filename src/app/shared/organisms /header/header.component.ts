import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AsyncPipe } from '@angular/common';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  document!: any;
  auth = inject(AuthService);
  authFB = inject(Auth);

  goToUrl(): void {
    this.document.location.href = 'https://processcoach.fr';
  }

  async logout($event: Event) {
    $event.preventDefault();

    await signOut(this.authFB);
  }
}
