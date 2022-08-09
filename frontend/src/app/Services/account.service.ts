import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignUpDTO} from '../shared/Interface/sign-up-dto';
import {LogInDTO} from "../shared/Interface/log-in-dto";
import {UsersDTO} from '../shared/Interface/users-dto';
import {AccResultDTO} from "../shared/Interface/acc-result-dto";
import {Observable,pipe,tap,map,filter} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private aapiUrl = "https://localhost:44337/api/Account/";

  constructor(private http:HttpClient) { }


  //GetUsers

  Users():Observable<UsersDTO[] | null> {
    return this.http.get<UsersDTO[] | null>(`${this.aapiUrl}`+'GetAllUsers');
  }

  //Register User

  SignUp(data:SignUpDTO):Observable<AccResultDTO>
  {
    return this.http.post<AccResultDTO>(`${this.aapiUrl}`+'SignUp',data).pipe(tap(data =>{
      if(data.result){
        localStorage.setItem('userId',data.userId);
      }
    }));
  }

  //LogIn User

  LogIn(data:LogInDTO) : Observable<AccResultDTO>
  {
    return this.http.post<AccResultDTO>(`${this.aapiUrl}`+"LogIn",data).pipe(tap(data =>{
      if(data.result){
        localStorage.setItem('userId',data.userId);
      }
    }));
  }

  LogOut():Observable<boolean>{
    return this.http.get<boolean>(`${this.aapiUrl}`+"LogOut").pipe(tap(data =>{
      if(data == true){
        console.log(data)
        localStorage.removeItem('userId');
        localStorage.removeItem('email');
      }
      return data;
    }));;

  }



}
