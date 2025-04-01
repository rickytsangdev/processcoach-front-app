import { Component } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FormComponent } from '../../shared/molecules/form/form.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormComponent],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  formType: 'login' | 'signup' = 'signup';
  action: string = "S'inscrire";

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
