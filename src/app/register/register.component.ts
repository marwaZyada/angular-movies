import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
loading:boolean=false
  constructor(private _formbuilder:FormBuilder,private _AuthService:AuthService,private _router:Router) {

  }
  registerForm:FormGroup=this._formbuilder.group({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })

  registration(dataform:FormGroup){
    console.log(dataform);
    
    if(dataform.valid){
      this.loading=true
    this._AuthService.register(dataform.value).subscribe({
      
     next:(res)=>{ 
      console.log(res)
    
    if(res.message=='success'){
this._router.navigate(['/login'])

 
   this.loading=false
  }
  },
  error:(err)=>{
    this.loading=false
    console.log(err);
    
  }

})

}
  }

}
