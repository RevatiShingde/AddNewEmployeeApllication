import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResisterFormComponent } from './resister-form/resister-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'resisterForm',pathMatch:'full'},
  {path:'resisterForm',component:ResisterFormComponent},
  {path:'loginForm',component:LoginFormComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
