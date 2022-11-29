import { Component } from '@angular/core';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
bookEdit=""
readValue=()=>
{
  let data:any={"bookEdit":this.bookEdit}
  console.log(data)
}
}
