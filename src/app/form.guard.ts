import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { FormService } from './form.service';

export const formGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const currentStep: number = inject(FormService).getFormData().step;
  const expectedStep: number = route.data['step'];

  const hasAccess: boolean = currentStep == 1

  console.log(expectedStep, hasAccess)

  return hasAccess || router.navigate(['/form']);
};
