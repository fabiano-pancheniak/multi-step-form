import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { FormService } from './form.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormComponent, NgClass, NgIf]
})
export class AppComponent{
  currentStep: number = this.formService.getFormData().step
  cssClassesArray: string[] = ['purple', 'gray', 'gray'] 
  constructor(private formService: FormService){
    this.formService.changeEmitted$.subscribe(data => {
      this.currentStep = data
      this.getCssClasses()
    });
  }

  getCssClasses(){
    switch (this.currentStep) {
      case 1:
          this.cssClassesArray = ['purple', 'gray', 'gray'] 
          break;
        case 2:
          this.cssClassesArray = ['success', 'purple', 'gray'] 
          break;
        case 3:
          this.cssClassesArray = ['success', 'success', 'purple'] 
          break;
        case 4:
          this.cssClassesArray = ['success', 'success', 'success'] 
          break;
    }
  }

  title = 'Multi Step Form';
}
