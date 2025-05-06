import { Component } from '@angular/core';
import { FormComponent } from '../../shared/molecules/form/form.component';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent, UpperCasePipe, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  title: string = 'Process Coach';
  showPassword: boolean = false;

  // exclu l'utilisation de l'espace dans le champ de texte
  preventSpace(event: KeyboardEvent): void {
    if (event.code === 'Space') {
      event.preventDefault();
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
