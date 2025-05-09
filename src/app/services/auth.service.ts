import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Firestore, collection, addDoc, doc, setDoc } from '@angular/fire/firestore';
import IUser from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #auth = inject(Auth);
  #firestore= inject(Firestore)

  constructor() { }



  async createUser(userData : IUser) {
     // Récupère les valeurs du formulaire la stock dans une variable auth qui l'injecte via le cdk firebase directement
          const userCred = await createUserWithEmailAndPassword(
            this.#auth,
            userData.email,
            userData.password
          );
    
          // on s'occupe ici de sauvegarder les autres éléments du formulaire
          await setDoc(doc(this.#firestore, 'users', userCred.user.uid), {
            firstName : userData.firstName, 
            lastName : userData.lastName
          })

          updateProfile(userCred.user, {
            displayName : userData.lastName,
            
          })
  }
}
