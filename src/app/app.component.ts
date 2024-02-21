import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { FormService } from './form.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormComponent, NgFor]
})
export class AppComponent {
  currentStep: number = this.formService.getFormData().step
  constructor(private formService: FormService){
      this.formService.changeEmitted$.subscribe(data => {
        this.currentStep = data
    });
   }
  
  title = 'Multi Step Form';
}
