import { ValidationErrors, AbstractControl, ControlContainer } from '@angular/forms';

export function Match(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password');
  const matchingControl = group.get('confirmPassword');

  if (!password || !matchingControl) {
    return { controlNotFound: false };
  }


  const error = password.value === matchingControl.value ? null : { notMatching: true };

  return error; 
}
