import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.scss'
})
export class Step2Component {
  constructor(private router: Router, private formService: FormService){ }

  companyName: string = this.formService.getFormData().companyName
  employees: string = this.formService.getFormData().employees
  about: string = this.formService.getFormData().about


  goBack(){
    this.formService.emitChange(1)
    this.router.navigateByUrl('/form/step1')
  }
  
  nextStep(){
    this.formService.emitChange(3)
    this.formService.setSecondStepData(this.companyName, this.employees, this.about)
    this.router.navigateByUrl('/form/step3')
  }
}
