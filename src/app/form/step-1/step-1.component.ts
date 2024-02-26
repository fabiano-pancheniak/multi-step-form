import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../form.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.scss'
})
export class Step1Component{
  personalInfo = new FormGroup({
    name: new FormControl(this.formService.getFormData().name, Validators.required),
    phone: new FormControl(this.formService.getFormData().phone, Validators.required),
    email: new FormControl(this.formService.getFormData().email, Validators.required),
  });

  constructor(private router: Router, private formService: FormService){ }
  
  nextStep(){
    const values = this.personalInfo.value    
    this.formService.setFirstStepData(values.name, values.phone, values.email)
    this.formService.emitChange(2);
    this.formService.updateStep(2);
    this.router.navigateByUrl('/form/step2')
  }
} 

