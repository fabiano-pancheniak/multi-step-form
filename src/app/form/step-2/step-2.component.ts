import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.scss'
})
export class Step2Component {
  companyInfo = new FormGroup({
    companyName: new FormControl(this.formService.getFormData().companyName, Validators.required),
    employees: new FormControl(this.formService.getFormData().employees, Validators.required),
    about: new FormControl(this.formService.getFormData().about, Validators.required),
  });

  constructor(private router: Router, private formService: FormService){
    if(formService.getFormData().step != 2){
      router.navigateByUrl('/form/step1')
    }
  }

  goBack(){
    const values = this.companyInfo.value    
    this.formService.setSecondStepData(values.companyName, values.employees, values.about)
    this.formService.emitChange(1)
    this.formService.updateStep(1);
    this.router.navigateByUrl('/form/step1')
  }
  
  nextStep(){
    const values = this.companyInfo.value    
    this.formService.setSecondStepData(values.companyName, values.employees, values.about)
    this.formService.emitChange(3)
    this.formService.updateStep(3);
    this.router.navigateByUrl('/form/step3')
  }
}
