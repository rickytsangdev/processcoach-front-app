import { Injectable, inject } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {
  Firestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
} from '@angular/fire/firestore';

import IUser from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #auth = inject(Auth);
  #firestore = inject(Firestore);
  authState$ = authState(this.#auth);

  constructor() {
    this.authState$.subscribe(console.log);
  }

  async createUser(userData: IUser) {
    // Récupère les valeurs du formulaire la stock dans une variable auth qui l'injecte via le cdk firebase directement
    const userCred = await createUserWithEmailAndPassword(
      this.#auth,
      userData.email,
      userData.password
    );

    // on s'occupe ici de sauvegarder les autres éléments du formulaire
    // on définit ici le role de chaque utilisateur qui par défaut est 'user'
    // j'ajoute l'information de l'email, présent déja pour l'auth mais info supplémentaire.
    await setDoc(doc(this.#firestore, 'users', userCred.user.uid), {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      role: userData.role || 'user',
    });

    updateProfile(userCred.user, {
      displayName: userData.lastName,
    });
  }

  // async getCurrentUser() {
  //   const currentUser = this.#auth.currentUser;
  //   if (!currentUser) {
  //     console.log('No user is currently logged in.');
  //     return null;
  //   }

  //   const userDoc = doc(this.#firestore, `users/${currentUser.uid}`);
  //   const userSnapshot = await getDoc(userDoc);

  //   if (userSnapshot.exists()) {
  //     console.log('User data retrieved from Firestore:', userSnapshot.data());

  //     return userSnapshot.data() as IUser;
  //   }
  //   console.log('No user document found in Firestore.');

  //   return null;
  // }

  async getCurrentUser() {
    return new Promise<IUser | null>((resolve) => {
      this.authState$.subscribe(async (user) => {
        if (!user) {
          console.log('No user is currently logged in.');
          resolve(null);
          return;
        }

        console.log('Current user UID:', user.uid);

        const userDoc = doc(this.#firestore, `users/${user.uid}`);
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          console.log(
            'User data retrieved from Firestore:',
            userSnapshot.data()
          );
          resolve(userSnapshot.data() as IUser);
        } else {
          console.log('No user document found in Firestore for UID:', user.uid);
          resolve(null);
        }
      });
    });
  }

  async isAdmin(): Promise<boolean> {
    try {
      const user = await this.getCurrentUser();
      console.log('User data in isAdmin:', user);
      return user?.role === 'admin';
    } catch (error) {
      console.error('Error in isAdmin:', error);
      return false;
    }
  }
}
