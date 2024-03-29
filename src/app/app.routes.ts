import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Step2Component } from './form/step-2/step-2.component';
import { Step1Component } from './form/step-1/step-1.component';
import { Step3Component } from './form/step-3/step-3.component';
import { FormSentComponent } from './form-sent/form-sent.component';

export const routes: Routes = [
  {path: '', redirectTo: 'form', pathMatch: 'full'},
  {
    path: 'form',
    component: FormComponent, 
    title: 'Multi Step Form',
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
      { path: 'step1', component: Step1Component },
      { path: 'step2', component: Step2Component },
      { path: 'step3', component: Step3Component },
      { path: 'sent', component: FormSentComponent }
    ],
  },  
];
