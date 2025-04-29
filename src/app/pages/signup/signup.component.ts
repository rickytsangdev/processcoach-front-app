import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FormComponent } from '../../shared/molecules/form/form.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormComponent, ReactiveFormsModule],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  formType: 'login' | 'signup' = 'signup';
  action: string = "S'inscrire";
  fb = inject(FormBuilder)

  form = this.fb.nonNullable.group({
    email: [''], 
    password :[''],
    lastName : [''], 
    firstName : [''],
  })

  onSubmit() {
    console.log(this.form.value); // Récupère les valeurs du formulaire
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
