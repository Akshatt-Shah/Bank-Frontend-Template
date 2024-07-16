import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';

export const accountguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const _toast = inject(ToastService);
  const account = localStorage.getItem('bankaccountno');
  if (!account) {
    _toast.error('Please select bank account');
    router.navigate(['/page/accounts']);
    return false;
  }
  console.log(account, 'AccountNo');
  return true;
};
