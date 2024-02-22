import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../form.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.scss'
})
export class Step1Component{
  constructor(private router: Router, private formService: FormService){ }
  
  name: string = this.formService.getFormData().name
  phone: string = this.formService.getFormData().phone
  email: string = this.formService.getFormData().email
  
  nextStep(){
    this.formService.emitChange(2);
    this.formService.updateStep(2);
    this.formService.setFirstStepData(this.name, this.phone, this.email)
    this.router.navigateByUrl('/form/step2')
  }
} 

