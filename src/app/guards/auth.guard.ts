import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = () => {
  const authStatus = inject(AdminService)
  const toaster = inject(ToastrService)
  const router = Inject(Router)

  if (authStatus.isLoggedIn()) {
    return true;
  } else {
    toaster.warning("Access Denied try! again later")
    router.navigateByUrl("")
    return false;
  }
};
