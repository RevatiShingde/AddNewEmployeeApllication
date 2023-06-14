import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resister-form',
  templateUrl: './resister-form.component.html',
  styleUrls: ['./resister-form.component.scss']
})
export class ResisterFormComponent implements OnInit{
resistretionForm! : FormGroup;
baseurl = "http://localhost:3000/resisterUser";
userData : any=[];
constructor(private fb : FormBuilder,private http : HttpClient,private router : Router){}

  ngOnInit(): void {
    this.resistretionForm = this.fb.group({
      firstname : ['revati',Validators.required],
      lastname : ['shingde',Validators.required],
      contact : [null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      address : [''],
      email : [null],
      password : ['',[Validators.minLength(6)]],
      confirmPassword : ['',[Validators.minLength(6)]]
    })
  }

  onSubmit(){
    let user ={
      ...this.resistretionForm.value
    }
    this.http.post<any>(this.baseurl,user).subscribe((user)=>{
      this.userData.push(user);
      this.resistretionForm.reset();
      this.router.navigate(['loginForm']);
    })  
  }
}
