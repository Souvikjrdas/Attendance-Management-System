import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpAttendanceComponent } from './Employee/emp-attendance/emp-attendance.component';
import { EmployeeDshboardComponent } from './Employee/employee-dshboard/employee-dshboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login' , pathMatch : 'full'
  },
  {
    path: 'register' , component : RegisterComponent
  },
  {
    path: 'login' , component: LoginComponent
  },
  {
    path : 'employee' , children:[
      {
        path: '' , component:EmployeeDshboardComponent 

      },
      {
        path:'attendance' , component: EmpAttendanceComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
