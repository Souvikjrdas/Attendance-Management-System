import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../Services/account.service';
import {Router} from '@angular/router';
import { CalendarOptions, EventClickArg } from '@fullcalendar/angular';
import { DatePipe } from '@angular/common'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { ThirdPartyDraggable } from '@fullcalendar/interaction';
import { DateClickArg } from '@fullcalendar/interaction';
import { AttendanceService } from 'src/app/Services/attendance.service';
import {AttendanceDTO} from '../../shared/Interface/attendance-dto';
import {Event} from '../../shared/Interface/event';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView : 'dayGridWeek',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridWeek,dayGridMonth',
    }
  }
  id : string = ""
  modalTitle : String = ""
  color : string = ""
  myDate : string = ""
  editDate : string | null = ""
  showModal : boolean = false
  userAttendance : AttendanceDTO[] = []
  userEvents : Event[] = []
  onlyCalendar : boolean = true
  constructor(private service: AccountService , private route:Router , private datepipe : DatePipe ,
     private attservice : AttendanceService) { }

  ngOnInit(): void {
    console.log("Hi from ngOninit")
    this.refreshEvents()
  }

  refreshEvents(){
    console.log("Hi from refresh events")
    //push events
    this.userEvents.length = 0
    let userId = localStorage.getItem('userId')
    if(userId != null){
      this.attservice.GetAttendanceByUserId(userId).subscribe((res:AttendanceDTO[] | null)=>
      {
        if(res != null){
          this.userAttendance = res
          console.log(this.userAttendance)
          for(let item of this.userAttendance)
          {
            if(item.hoursWorked >= 8)
            {
              console.log("green")
              this.color = 'green'
            }
            else
            {
              if(item.hoursWorked >= 4 && item.hoursWorked < 8)
              {
                console.log("yellow")
                this.color = 'yellow'
              }
              else
              {
                this.color = 'red'
              }
            }
            this.editDate = this.datepipe.transform(item.date,'yyyy-MM-dd')
            this.myDate = (this.editDate? this.editDate : "")
            if(this.editDate != null)
            {
             this.myDate = this.editDate
            }
            this.userEvents.push({
              title : '',
              backgroundColor: this.color,
              start: this.myDate,
              display: 'background',
              id : item.id,
            })
            this.editDate = ""
          }
        }
        //Implement FullCalendar
        this.calendarOptions = {
          initialView: 'dayGridWeek',
          headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridWeek,dayGridMonth'
          },
          dateClick:this.onDateClick.bind(this),
          events:this.userEvents,
          // eventClick: this.oneventclick.bind(this),
          weekends: true
        };
        console.log("after calendar options!")
      });
    };
  }

  reloadCurrentRoute() {
    let currentUrl = this.route.url;
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.route.navigate([currentUrl]);
    });
  }
  onDateClick(dateClickInfo:DateClickArg){

    let userId = localStorage.getItem('userId')
    if(userId != null){
      this.attservice.GetAttendanceByUserId(userId).subscribe((res:AttendanceDTO[] | null)=>
      {
        if(res != null)
        {
          this.userAttendance = res
          let index = this.userAttendance.findIndex(item => this.datepipe.transform(item.date,'yyyy-MM-dd') == dateClickInfo.dateStr)
          if(index == -1)
          {
            //Add
            this.id = "0"
            this.modalTitle = "Add Attendance"
            console.log("index :"+index)
            console.log("add attendance")
          }
          else{
            //update
            this.modalTitle = "Edit Attendance"
            this.id = this.userAttendance[index].id

            console.log("index :"+index)
            console.log("update attendance")
          }
        }
        else{
          //Add
          this.id = "0"
          this.modalTitle = "Add Attendance"
          console.log("No attendance present of the user!")
          console.log("add attendance")
        }
        this.showModal = true
        this.onlyCalendar = false
      })
    }

  }

  event(data:boolean)
  {
    if(data)
    {
      console.log("Response from child to parent!")
      this.showModal = false
      this.onlyCalendar = true
      this.reloadCurrentRoute()
    }

  }

  close(){
    this.showModal = false;
    this.onlyCalendar = true;
  }


  addClick(){

  }

  LogOut(){
    this.service.LogOut().subscribe((res:boolean)=>{
      if(res)
      {
        this.route.navigateByUrl('/');
      }
    })

  }

}
