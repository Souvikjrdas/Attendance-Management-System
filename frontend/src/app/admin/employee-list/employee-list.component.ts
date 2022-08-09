import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common'
import { AttendanceService } from 'src/app/Services/attendance.service';
import { AccountService } from 'src/app/Services/account.service';
import {UsersDTO} from '../../shared/Interface/users-dto';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: AccountService , private route:Router , private datepipe : DatePipe ,
    private attservice : AttendanceService) { }

  users:UsersDTO[] | null = []
  show:boolean = false

  id: string = ""

  ngOnInit(): void {

    this.service.Users().subscribe((res:UsersDTO[] | null)=>{
      this.users = res
    })
  }

  myDetails(data:string){
    this.show = true
    this.id = data
    console.log("From Details"+data)
  }

  close(){
    this.show = false
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
