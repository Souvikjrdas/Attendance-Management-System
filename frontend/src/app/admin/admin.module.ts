import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {MySharedModule} from "../my-shared/my-shared.module";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AdminAttendanceComponent } from './admin-attendance/admin-attendance.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    EmployeeListComponent,
    AdminAttendanceComponent,
    EmployeeAttendanceComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MySharedModule
  ],
  exports:[
    AdminRoutingModule
  ]
})
export class AdminModule { }
