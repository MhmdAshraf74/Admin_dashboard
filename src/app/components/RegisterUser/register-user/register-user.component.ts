import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../services/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  fb= inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router)

  constructor(
    public authService : AuthServiceService
  ){}
  form = this.fb.nonNullable.group({
    userName:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  })

  onSubmit(): void {
    const rowForm = this.form.getRawValue();
    this.authService.SignUp(rowForm.email,rowForm.password).then
    (()=>this.router.navigateByUrl('/home')).catch((err)=>{
      console.log(err);

    })
  }


}
