import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAttendanceComponent } from './admin-attendance/admin-attendance.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path: 'admin' , children : [
      {
        path:'',component:AdminDashboardComponent
      },
      {
        path : 'employeelist' , component: EmployeeListComponent
      },
      {
        path: 'attendance' , component : AdminAttendanceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
