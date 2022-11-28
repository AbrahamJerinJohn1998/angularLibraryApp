import { Component } from '@angular/core';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent {
  userName=""
  Password=""
  readValue=()=>
  {
    let data:any={"userName":this.userName,"password":this.Password}
    console.log(data)
  }

}
