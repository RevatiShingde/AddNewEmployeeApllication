import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  @ViewChild('loginForm')loginForm!:NgForm;
  email! : string;
  password! : string|number;
  loginData : any = [];
  constructor(private http : HttpClient,private router : Router){}

  ngOnInit(): void {
  
  }

  onSubmit(form : NgForm){
    console.log(this.loginForm.value);
  }

  login(){
    this.http.get<any>("http://localhost:3000/resisterUser")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("login Successfully!!");
        this.loginForm.reset();
        this.router.navigate(['home']);
      }else{
        alert("employee not found!!")
      }
    },
    err=>{
      alert("something went wrong!!")
    })
  }
  
}