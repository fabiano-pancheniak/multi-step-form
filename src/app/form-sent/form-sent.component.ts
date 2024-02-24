import { Component } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-sent',
  standalone: true,
  imports: [],
  templateUrl: './form-sent.component.html',
  styleUrl: './form-sent.component.scss'
})
export class FormSentComponent {
  formData: any = this.formService.getFormData()
  constructor(private formService: FormService, private router: Router){
    if(!this.formData.sent){
      router.navigateByUrl('/form/step1')
    }
  }
  restartForm() {
    this.formService.resetForm()
    this.formService.emitChange(1)
    this.router.navigateByUrl('/form/step1')
  }
}
