import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SignUpDTO} from '../shared/Interface/sign-up-dto';
import {LogInDTO} from '../shared/Interface/log-in-dto';
import {AccResultDTO} from '../shared/Interface/acc-result-dto';
import {AccountService} from '../Services/account.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert : boolean = false;
  arr : Array<string> = [];
  mySignUp : SignUpDTO = {
    email : "",
    password : "",
    role: '',
    firstName : "",
    lastName : ""
  }

  myLogIn : LogInDTO = {
    email : "",
    password : ""
  }

  constructor(private service:AccountService , private route : Router) { }

  ngOnInit(): void {
  }

  getForm(Register:NgForm){

    this.mySignUp  = Register.value
    Register.resetForm()
    this.service.SignUp(this.mySignUp).subscribe((res:AccResultDTO)=>{
      console.log(res.result)
      if(res.result)
      {
        // this.myLogIn.email = this.mySignUp.email;
        // this.myLogIn.password = this.mySignUp.password;
        this.myLogIn = this.mySignUp;
        this.service.LogIn(this.myLogIn).subscribe((res:AccResultDTO)=>{
          if(res.result){
            localStorage.setItem('email' , this.myLogIn.email)
            if(this.myLogIn.email == 'teamlead@gmail.com'){
              this.route.navigateByUrl('/admin')
            }
            else{
              this.route.navigateByUrl('/employee')
            }
          }
          else{
            this.arr.push("Could not sign you in! Try again");
            this.arr.push("Check your credentials");
            this.alert = true
            Register.resetForm()
          }
        })
      }
      else{
        console.log("Regi failed!");
        this.arr.push("Could not register you!")
        this.arr.push("Please follow the guidelines:")
        this.arr.push("Email Address should be unique!")
        this.arr.push("Password should be of atleast 5 characters.")
        this.alert = true
        Register.resetForm()
      }

    })

    // this.myLogIn = this.mySignUp;

    // console.log(this.myLogIn)
  }

  buttonClose(){
    this.alert = false;
    this.arr = new Array;
  }





}
