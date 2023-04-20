import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService,private _Router:Router) {

  }
  loginForm:FormGroup=this._FormBuilder.group({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)])
  })

  login(dataForm:FormGroup){
   console.log(dataForm);
   
   if(dataForm.valid){
    this._AuthService.login(dataForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.message=='success'){
          localStorage.clear()
          localStorage.setItem('token',res.token)
          this._AuthService.token=res.token
          this._Router.navigate(['/home'])
        }
        
      }
    })
  }}

  
}
