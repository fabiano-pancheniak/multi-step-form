import { Component } from '@angular/core';
import { FormService } from '../../form.service';
import { Router } from '@angular/router';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-3',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './step-3.component.html',
  styleUrl: './step-3.component.scss'
})
export class Step3Component{
  projectInfo = new FormGroup({
    projectGoals: new FormControl(this.formService.getFormData().projectGoals, Validators.required),
  });

  constructor(private formService: FormService, private router: Router){
    if(formService.getFormData().step != 3){
      router.navigateByUrl('/form/step1')
    }
  }

  sendForm(){
    const values = this.projectInfo.value  
    this.formService.setFormData(values.projectGoals)
    this.formService.setFormSent(true)
    this.formService.emitChange(4)
    this.router.navigateByUrl('/form/sent')
  }
  goBack(){
    const values = this.projectInfo.value  
    this.formService.setFormData(values.projectGoals)
    this.formService.emitChange(2)
    this.formService.updateStep(2);
    this.router.navigateByUrl('/form/step2')
  }
}
