import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';

export const adminguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const _toast = inject(ToastService);
  const isLoggedIn = localStorage.getItem('bankuserrole');
  if(isLoggedIn === "admin") {
    // console.log("login")
    return true;
  }
  else{
    _toast.error("Please Login With Admin Account");
    router.navigate(['/auth/login'])
    return false;
  }
};
