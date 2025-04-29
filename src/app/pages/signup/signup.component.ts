import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FormComponent } from '../../shared/molecules/form/form.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  formType: 'login' | 'signup' = 'signup';
  action: string = "S'inscrire";
  fb = inject(FormBuilder)
  json : any

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.minLength(3)]], 
    password :['', Validators.required],
    lastName : ['', Validators.required], 
    firstName : ['', Validators.required],
  })

  onSubmit() {
    console.log(this.form.value);
    console.log(this.form.controls.email.errors); // Récupère les valeurs du formulaire
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
