import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,pipe,tap,map,filter} from 'rxjs';
import {AttendanceDTO} from '../shared/Interface/attendance-dto';
import {Message} from '../shared/Interface/message';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private aapiUrl = "https://localhost:44337/api/Attendance/";

  constructor(private http : HttpClient) { }

  //GetAllAttendance

  GetAllattendance():Observable<AttendanceDTO[]>{
    return this.http.get<AttendanceDTO[]>(`${this.aapiUrl}`+"GetAllAttendance");
  }

  //GetattendanceByid

  GetAttendance(id:string) : Observable<AttendanceDTO>{
    return this.http.get<AttendanceDTO>(`${this.aapiUrl}`+"GetAttendance/"+id);
  }

  //GetAttendanceByUserId

  GetAttendanceByUserId(userId:string) : Observable<AttendanceDTO[] | null>{
    return this.http.get<AttendanceDTO[] | null>(`${this.aapiUrl}`+"GetAttendance?"+"userId="+userId);
  }

  //AddAttendance
   AddAttendance(data:AttendanceDTO) : Observable<Message>{
     return this.http.post<Message>(`${this.aapiUrl}`+'AddAttendance',data);
   }

   //EditAttendance
   EditAttendance(id:string , data:AttendanceDTO) : Observable<Message>{
     return this.http.put<Message>(`${this.aapiUrl}`+'EditAttendance/'+id,data);
   }

   //DeleteAttendance

   DeleteAttendance(id:string):Observable<Message>{
     return this.http.delete<Message>(`${this.aapiUrl}`+'DeleteAttendance/'+id);
   }






}
