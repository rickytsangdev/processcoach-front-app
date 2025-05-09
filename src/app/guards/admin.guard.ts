import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log('AdminGuard: Checking admin access...');

  try {
    const isAdmin = await authService.isAdmin();
    if (isAdmin) {
      console.log('AdminGuard: isAdmin =', isAdmin);
      return true; // Autoriser l'accès si l'utilisateur est admin
    }

    // Redirige vers la page d'accueil si l'utilisateur n'est pas admin
    router.navigate(['/dashboard']);

    return false;
  } catch (error) {
    console.error('Error in adminGuard:', error);
    router.navigate(['/home']);
    return false;
  }
};
