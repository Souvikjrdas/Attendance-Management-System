import { Component, Input, OnChanges, OnInit, Output, SimpleChanges,EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AttendanceDTO} from "../../shared/Interface/attendance-dto";
import {Message} from "../../shared/Interface/message";
import {AttendanceService} from "../../Services/attendance.service";
import {AccountService} from "../../Services/account.service";
@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit , OnChanges {


  @Input() id : string = ""
  @Output() myEvent : EventEmitter<boolean> = new EventEmitter()
  attendance : AttendanceDTO = {
    id : "",
    employeeId: "",
    hoursWorked: 0,
    date: new Date(),
    userId: "",
    remarks: ""
  }
  constructor(private account : AccountService , private att : AttendanceService) { }

  ngOnChanges(changes: SimpleChanges): void {

    //Two-way Binding

    if(this.id  !== "" && this.id !== "0")
    {
      this.att.GetAttendance(this.id).subscribe((res:AttendanceDTO)=>{
        if(res != null)
        {
          this.attendance = res
          console.log(this.attendance);
        }
      })
    }
    else{
      if(this.id == "0"){
        this.attendance.id = ""
        this.attendance.date = new Date()
        this.attendance.hoursWorked = 0
        this.attendance.remarks = ""
      }
    }

  }

  ngOnInit(): void {
  }

  getForm(Attendance:NgForm)
  {
    if(this.id == "0"){
      this.addAttendance(Attendance)
    }
    else
    {
      this.updateAttendance(Attendance)
    }
  }

  addAttendance(data:NgForm)
  {
    this.attendance = data.value;
    let email = localStorage.getItem('email')
    let userId =  localStorage.getItem('userId')
    if(userId !== null && email !== null)
    {
      this.attendance.employeeId = email
      this.attendance.userId = userId
      this.attendance.date = data.value.date
      console.log("Form Value")
      console.log(data.value)
      console.log("attendance object value")
      console.log(this.attendance)
      //call service to send data to backened
      this.att.AddAttendance(this.attendance).subscribe((res:Message)=>{
        alert(res.info);
        this.myEvent.emit(true);
      })
    }
    else{
      alert("Oops! Attendance cannot be marked!");
    }
    data.resetForm();
  }

  updateAttendance(Attendance:NgForm)
  {
    // console.log("Update attendance form")
    // console.log(Attendance.value)
    // console.log("Attendance of the employee")
    // console.log(this.attendance)

    this.att.EditAttendance(this.attendance.id,this.attendance).subscribe((res:Message)=>{
      alert(res.info);
      Attendance.resetForm();
      this.myEvent.emit(true)
    })


  }
}
