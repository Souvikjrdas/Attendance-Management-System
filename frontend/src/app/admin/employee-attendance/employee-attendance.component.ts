import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {AccountService} from '../../Services/account.service';
import {Router} from '@angular/router';
import { AttendanceService } from 'src/app/Services/attendance.service';
import {AttendanceDTO} from '../../shared/Interface/attendance-dto';
@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.css']
})
export class EmployeeAttendanceComponent implements OnInit , OnChanges {

  attendance : AttendanceDTO[] | null =  []

  @Input() id : string = ""

  constructor(private service: AccountService , private route:Router , private attservice : AttendanceService) { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.attservice.GetAttendanceByUserId(this.id).subscribe((res:AttendanceDTO[] | null)=>
    {
      this.attendance = res
      console.log(this.attendance)
    })
  }

}
