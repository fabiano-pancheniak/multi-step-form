import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Step2Component } from './form/step-2/step-2.component';
import { Step1Component } from './form/step-1/step-1.component';
import { Step3Component } from './form/step-3/step-3.component';
import { formGuard } from './form.guard';
import { FormService } from './form.service';
import { inject } from '@angular/core';
import { FormSentComponent } from './form-sent/form-sent.component';

export const routes: Routes = [
  {
    path: 'form',
    component: FormComponent, // Create a wrapper component for the form
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' }, // Redirect to step1 by default
      { path: 'step1', component: Step1Component },
      { path: 'step2', component: Step2Component },
      { path: 'step3', component: Step3Component },
      { path: 'sent', component: FormSentComponent }
    ],
  },  
];
