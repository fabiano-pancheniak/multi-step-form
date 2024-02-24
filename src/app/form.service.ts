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

  constructor(){ }

  setFirstStepData(name: string, phone: string, email: string){
    this.formData.name = name
    this.formData.phone = phone
    this.formData.email = email
  }
  
  setSecondStepData(companyName: string, employees: string, about: string){
    this.formData.companyName = companyName
    this.formData.employees = employees
    this.formData.about = about
  }

  setFormData(projectGoals: string){
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
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
      this.emitChangeSource.next(change);
  }
}
