import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  isUpdate : boolean = false;
  userForm!: FormGroup;
  userData : any =[];
  constructor(private employeeService : EmployeeService,private fb : FormBuilder){}
  ngOnInit(): void {
    this.userForm = this.fb.group({
      id :[],
      firstname : ['revati',Validators.required],
      lastname : ['shingde',Validators.required],
      contact : [Number,Validators.required],
      address : [''],
      email : [],
      password : [],
      confirmPassword : []
    })
    this.getAllusers();
  }

  getAllusers(){
    this.employeeService.getAllEmp().subscribe((res : any)=>{
      this.userData = res;
    })
  }

  submit(){
    let emp={
      ...this.userForm.value
    }
    this.employeeService.addNewEmp(emp).subscribe((emp : any)=>{
      this.userData.push(emp);
      let ref = document.getElementById('cancel')
      ref?.click()
      this.userForm.reset();
    })
  }

  edit(id: any,emp: any){
    this.isUpdate = true;
    let setId = localStorage.setItem('id',id);
    this.employeeService.getSingleEmp(id).subscribe((emp : any)=>{
      this.userForm.setValue({
        id : emp.id,
        firstname : emp.firstname,
        lastname : emp.lastname,
        contact : emp.contact,
        address : emp.address,
        email : emp.email,
        password : emp.password,
        confirmPassword : emp.confirmPassword
      })
    })
  }

  update(){
    let getId = +(localStorage.getItem('id')!);
    let emp ={
      ...this.userForm.value
    }
    this.employeeService.updateEmpInfo(getId,emp).subscribe((emp)=>{
      this.isUpdate= false;
      this.userForm.reset;
    })
    this.getAllusers();
  }

  delete(id : any){{
    this.employeeService.deleteEmp(id).subscribe((emp)=>{
      alert('employee deleted successfully')
    })
    this.getAllusers();
  }}
}
