import { Component, OnInit } from '@angular/core';
import { NgIf, UpperCasePipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 


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

  login(){
    console.log(this.credentials);
  }
}
