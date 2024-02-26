import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formData = {
    sent: false,
    step: 1,
    name:  '',
    phone:  '',
    email:  '',
    companyName: '',
    employees: '',
    about: '',
    projectGoals: ''
  }

  setFirstStepData(name: any, phone: any, email: any){
    this.formData.name = name
    this.formData.phone = phone
    this.formData.email = email
  }
  
  setSecondStepData(companyName: any, employees: any, about: any){
    this.formData.companyName = companyName
    this.formData.employees = employees
    this.formData.about = about
  }

  setFormData(projectGoals: any){
    this.formData.projectGoals = projectGoals
  }

  setFormSent(sent: boolean){
    this.formData.sent = sent
  }

  updateStep(step: number){
    this.formData.step = step
  }

  getFormData(){
    return this.formData
  }

  resetForm(){
    this.formData = {
      sent: false,
      step: 1,
      name:  '',
      phone:  '',
      email:  '',
      companyName: '',
      employees: '',
      about: '',
      projectGoals: ''
    }
  }

  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();
  emitChange(change: any) {
      this.emitChangeSource.next(change);
  }
}
