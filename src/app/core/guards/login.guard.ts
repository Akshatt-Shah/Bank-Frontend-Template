import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const _toast = inject(ToastService);
  const isLoggedIn = localStorage.getItem('bankusertoken');
  if (isLoggedIn) {
    // console.log("login")
    return true;
  } else {
    _toast.error('Please Login ');
    router.navigate(['/auth/login']);
    return false;
  }
};
