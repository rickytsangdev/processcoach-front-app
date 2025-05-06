import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './form.component.html',
})
export class FormComponent {
  showPassword:boolean = false;

  connectionBtn = 'Se connecter';
  @Input() formType: 'login' | 'signup' = 'login';
  @Input() formGroup!: FormGroup; // Reçoit le FormGroup du parent


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