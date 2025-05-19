import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FormComponent } from '../../shared/molecules/form/form.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Match } from './validators';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  formType: 'login' | 'signup' = 'signup';
  action: string = "S'inscrire";
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  json: any;

  alertMsg: any;
  alertColor: any;

  form = this.fb.nonNullable.group({
    email: [
      '',
      [Validators.required, Validators.minLength(3), Validators.email],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        ),
      ],
    ],
    confirmPassword: [
      '',
      [Validators.required]
    ],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
  }, {
    validators: [Match],
  }

);

  async register() {
    try {
      await this.auth.createUser(this.form.getRawValue());
    } catch (error) {
      console.log(error);

      alert('An expected error occured ! try again later. ');
      return;
    }

    alert('Success ! Your account has been created !');
    this.router.navigate(['/dashboard']);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        // Logique pour la page de connexion
        if (event.urlAfterRedirects.includes('/login')) {
          // Logique pour la page d'inscription
        } else if (event.urlAfterRedirects.includes('/signup')) {
        }
      });
  }
}
