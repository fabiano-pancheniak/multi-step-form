import { Component } from '@angular/core';
import { FormService } from '../../form.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-step-3',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './step-3.component.html',
  styleUrl: './step-3.component.scss'
})
export class Step3Component{
  projectGoals: string = ''
  formSent: boolean = false
  formData: any = {}
  constructor(private formService: FormService, private router: Router){
    if(formService.getFormData().step != 3){
      router.navigateByUrl('/form/step1')
    }
  }

  sendForm(){
    this.formService.setFormData(this.projectGoals)
    this.formSent = true
    this.formData = this.formService.getFormData()
  }
  goBack(){
    this.formService.emitChange(2)
    this.formService.updateStep(2);
    this.router.navigateByUrl('/form/step2')
  }
}
