import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  userName=""
  Password=""
  constructor(private route:Router){}
  readValue=()=>
  {
    let data:any={"userName":this.userName,"password":this.Password}
    console.log(data)
    if (this.userName=="admin" && this.Password=="12345") 
    {
     this.route.navigate(['/bookentry'])
    } 
    else
     {
      alert("invalid credentials")
    }
  }

}
