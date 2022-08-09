import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../Services/account.service';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common'
import { AttendanceService } from 'src/app/Services/attendance.service';
@Component({
  selector: 'app-employee-dshboard',
  templateUrl: './employee-dshboard.component.html',
  styleUrls: ['./employee-dshboard.component.css']
})
export class EmployeeDshboardComponent implements OnInit {

  constructor(private service: AccountService , private route:Router , private datepipe : DatePipe ,
     private attservice : AttendanceService) { }

  ngOnInit(): void {
    console.log("Hi from ngOninit")
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
