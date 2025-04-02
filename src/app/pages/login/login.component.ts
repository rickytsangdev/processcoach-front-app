import { Component } from '@angular/core';
import { FormComponent } from '../../shared/molecules/form/form.component';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent, UpperCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
