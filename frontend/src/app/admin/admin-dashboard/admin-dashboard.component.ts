import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../Services/account.service';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common'
import { AttendanceService } from 'src/app/Services/attendance.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private service: AccountService , private route:Router , private datepipe : DatePipe ,
    private attservice : AttendanceService) { }

  ngOnInit(): void {
  }


  myAttendance(){
    let userId = localStorage.getItem('userId')
    alert(userId);
    //call service
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
