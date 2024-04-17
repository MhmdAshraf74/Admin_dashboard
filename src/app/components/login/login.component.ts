import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb= inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router)
  constructor(
    public authService : AuthServiceService,
  ){}
  form = this.fb.nonNullable.group({
    
    email:['',Validators.required],
    password:['',Validators.required]
  })
  onSubmit(): void {
    const rowForm = this.form.getRawValue();
    this.authService.SignIn(rowForm.email,rowForm.password).then
    (()=>this.router.navigateByUrl('/home')).catch((err)=>{
      console.log(err);

    })
  }

}
