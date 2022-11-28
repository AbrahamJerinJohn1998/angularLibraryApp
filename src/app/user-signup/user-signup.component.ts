import { Component } from '@angular/core';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  name=""
  aadharNo=""
  address=""
  pinCode=""
  readValue=()=>
  {
    let data:any={"name":this.name,"aadharNo":this.aadharNo,"address":this.address,"pinCode":this.pinCode}
    console.log(data)
  }
  


}
