import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySharedRoutingModule } from './my-shared-routing.module';
import { MySharedDashboardComponent } from './my-shared-dashboard/my-shared-dashboard.component';
import {FormsModule} from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { MyModalComponent } from './my-modal/my-modal.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    MySharedDashboardComponent,
    MyModalComponent,
  ],
  imports: [
    CommonModule,
    MySharedRoutingModule,
    FormsModule,
    FullCalendarModule
  ],
  exports:[
    MySharedDashboardComponent,
    // MySharedRoutingModule
  ]
})
export class MySharedModule { }
