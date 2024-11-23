import { Component } from '@angular/core';
import {AbstractControl, ReactiveFormsModule, FormBuilder,FormGroup,ValidatorFn,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styles: ``
})
export class RegistrationComponent {
form: FormGroup<any>;
isSubmitted:boolean = false;

passwordMatchValidator: ValidatorFn= (control:AbstractControl):null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if(password && confirmPassword&&password.value !=confirmPassword.value)
    confirmPassword?.setErrors({passwordMismatch:true})
  else
  confirmPassword?.setErrors(null)
  
      return null;
    }
   constructor(public formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      fullName: ['',Validators.required],
      email: ['',Validators.required, Validators.email],
      password: ['',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/(?=.*[^a-zA-Z0-9])/)]],
      
      confirmPassword: [''],

    },{validators:this.passwordMatchValidator});
    
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.form.value); 
  }
  hasDisplayableError(controlName: string):Boolean {
    const control= this.form.get(controlName);
    return Boolean(control?.invalid)&&
    (this.isSubmitted || Boolean(control?.touched))
}
}
