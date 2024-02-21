import { Component } from '@angular/core';
import { FormService } from '../../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-3',
  standalone: true,
  imports: [],
  templateUrl: './step-3.component.html',
  styleUrl: './step-3.component.scss'
})
export class Step3Component {
  constructor(private formService: FormService, private router: Router){ }
  goBack(){
    this.formService.emitChange(2)
    this.router.navigateByUrl('/form/step2')
  }
}
