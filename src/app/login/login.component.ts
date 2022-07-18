import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login={
    email: '',
    password:'',
  };
  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit(){
    if((this.login.password.trim()=='' || this.login.password == null)&&(this.login.email.trim()=='' || this.login.email == null)){
      this.snack.open("email and password Required !!" , '', {
        duration: 3000
      });
      return;
    }
    else if(this.login.email.trim()=='' || this.login.email == null){
      this.snack.open("email Required !!" , '', {
        duration: 3000
      });
      return;
    }
    else if(this.login.password.trim()=='' || this.login.password == null){
      this.snack.open("password Required !!" , '', {
        duration: 3000
      });
      return;
    }
    
  }
  Toogle(){
    this.login.email="";
    this.login.password="";
  }

  
}

