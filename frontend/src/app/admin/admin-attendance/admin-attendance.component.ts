import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../Services/account.service';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common'
import { AttendanceService } from 'src/app/Services/attendance.service';
import {AttendanceDTO} from '../../shared/Interface/attendance-dto';
@Component({
  selector: 'app-admin-attendance',
  templateUrl: './admin-attendance.component.html',
  styleUrls: ['./admin-attendance.component.css']
})
export class AdminAttendanceComponent implements OnInit {

  constructor(private service: AccountService , private route:Router , private datepipe : DatePipe ,
    private attservice : AttendanceService) { }

    myAttendance : AttendanceDTO[] | null = []

  ngOnInit(): void {
    let userId = localStorage.getItem('userId')
    if(userId != null){
      this.attservice.GetAttendanceByUserId(userId).subscribe((res:AttendanceDTO[] | null)=>{
        this.myAttendance = res
      })
    }
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
