import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url ="http://localhost:3000/users";
  constructor(private http : HttpClient) { }

  getAllEmp(){
    return this.http.get<any>(this.url);
  }

  getSingleEmp(id : any){
    return this.http.get<any>(`${this.url}/${id}`)
  }

  addNewEmp(emp : any){
    return this.http.post<any>(`${this.url}`,emp)
  }

  updateEmpInfo(id : any,emp : any){
    return this.http.put(`${this.url}/${id}`,emp);
  }

  deleteEmp(id : any){
    return this.http.delete(`${this.url}/${id}`);
  }
}
