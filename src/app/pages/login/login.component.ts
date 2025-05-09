import { Component, inject, OnInit } from '@angular/core';
import { UpperCasePipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  title: string = 'Process Coach';
  showPassword: boolean = false;
  auth = inject(Auth);
  router = inject(Router);

  credentials = {
    email: '',
    password: '',
  };

  // exclu l'utilisation de l'espace dans le champ de texte
  preventSpace(event: KeyboardEvent): void {
    if (event.code === 'Space') {
      event.preventDefault();
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  async login() {
    // use credentials to signin a user with email and password
    try {
      await signInWithEmailAndPassword(
        this.auth,
        this.credentials.email,
        this.credentials.password
      );
    } catch (error) {
      alert('Impossible de se connecter. Le compte n\'existe pas. ');
      return;
    }
    alert('Success ! You are connected !');
    this.router.navigate(['/dashboard']);
  }

  async disconnect() {}
}
