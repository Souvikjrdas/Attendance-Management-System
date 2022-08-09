import { Component, OnInit } from '@angular/core';
import {LogInDTO} from '../shared/Interface/log-in-dto';
import {NgForm} from '@angular/forms';
import {AccountService} from '../Services/account.service';
import {AccResultDTO} from '../shared/Interface/acc-result-dto';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : []
})
export class LoginComponent implements OnInit {

  alert : boolean = false;
  arr : Array<string> = [];
  myLogInDTO : LogInDTO = {
    email : "",
    password : "",
  }

  constructor(private service:AccountService, private route : Router) { }

  ngOnInit(): void {
  }

  getForm(LogIn : NgForm)
  {
    this.myLogInDTO = LogIn.value;
    this.service.LogIn(this.myLogInDTO).subscribe(
      (res:AccResultDTO)=>{
        if(res.result){
          localStorage.setItem('email',this.myLogInDTO.email);
          if(this.myLogInDTO.email.toUpperCase() == 'TEAMLEAD@GMAIL.COM'){
            this.route.navigateByUrl('/admin');
          }
          else{
            this.route.navigateByUrl('/employee');
          }
        }
        else{
            this.arr = new Array;
            this.arr.push("Could not sign you in! Try again");
            this.arr.push("Check your credentials");
            this.alert = true;
            LogIn.resetForm();
        }
      }
    )
  }

  buttonClose(){
    this.alert = false;
    this.arr = new Array;
  }

}
