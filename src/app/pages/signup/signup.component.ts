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
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

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
  json: any;
  #auth = inject(Auth);
  alertMsg: any;
  alertColor: any;
  #firestore= inject(Firestore)

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
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
  });

  async register() {
    console.log(this.form.value);
    console.log(this.form.controls.email.errors);
    console.log(this.form.controls['password'].errors);

    const { email, password } = this.form.getRawValue();

    try {
      // Récupère les valeurs du formulaire la stock dans une variable auth qui l'injecte via le cdk firebase directement
      const userCred = await createUserWithEmailAndPassword(
        this.#auth,
        email,
        password
      );

      // on s'occupe ici de sauvegarder les autres éléments du formulaire
      await addDoc(collection(this.#firestore, 'users'), {
        firstName : this.form.getRawValue().lastName, 
        lastName : this.form.getRawValue().firstName
      })

      console.log(userCred);
    } catch (error) {
      console.log(error);

      alert('An expected error occured ! try again later. ');
      return;
    }

    alert('Success ! Your account has been created !');
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
