import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgIf],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  document!: any;
  auth = inject(AuthService);
  authFB = inject(Auth);
  router = inject(Router);
  isLogginIn: boolean = false; // Propriété pour vérifier si l'utilisateur est connecté
  isAdmin: boolean = false; // Ajout de la propriété pour le rôle admin

  constructor() {
    this.auth.authState$.subscribe((state) => {
      this.isLogginIn = !!state; // Met à jour l'état de connexion
      if (this.isLogginIn) {
        // Vérifie si l'utilisateur est admin
        this.auth.isAdmin().then((isAdmin) => {
          this.isAdmin = isAdmin;
        });
      } else {
        this.isAdmin = false;
      }
    });
  }

  goToUrl(): void {
    this.document.location.href = 'https://processcoach.fr';
  }

  async logout($event: Event) {
    $event.preventDefault();

    await signOut(this.authFB);
  }
}
