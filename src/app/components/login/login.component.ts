import { Component, inject, NgModule, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { AbstractControl, FormBuilder,  FormControl,  FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    remember: new FormControl(false)
  })

  fb= inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router)

  constructor(
    public authService : AuthServiceService,
  ){}

  ngOnInit(): void{
  this.form = this.fb.group({
    
      email:['',Validators.required,Validators.email],
      password:['',Validators.required, ],
      remember:['false',Validators.requiredTrue]
    })
    this.reset()

  }
  submitted = false;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    const rowForm = this.form.getRawValue();
     this.submitted=true
    
    if(this.form.invalid){
      return
    }
    
    this.authService.SignIn(rowForm.email,rowForm.password)
    this.reset()
    
  }

  reset(){
    this.submitted= false;
    this.form.reset()
  }

}
