import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
