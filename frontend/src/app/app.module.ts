import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {MySharedModule} from './my-shared/my-shared.module';
import {AdminModule} from './admin/admin.module';
import { EmployeeDshboardComponent } from './Employee/employee-dshboard/employee-dshboard.component';
import { EmpAttendanceComponent } from './Employee/emp-attendance/emp-attendance.component';
// import { CRUDComponent } from './shared/crud/crud.component';
// import { FullCalendarModule } from '@fullcalendar/angular';
// import {MySharedModule} from './my-shared/my-shared.module';
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import interactionPlugin from '@fullcalendar/interaction';


// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,
//   interactionPlugin
// ]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    EmployeeDshboardComponent,
    EmpAttendanceComponent,
    // CRUDComponent,
  ],
  imports: [
    MySharedModule,
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    // FullCalendarModule, // register FullCalendar with you app
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
