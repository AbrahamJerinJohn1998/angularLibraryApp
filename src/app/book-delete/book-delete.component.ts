import { Component } from '@angular/core';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {
bookTitle=""
readValue=()=>
{
  let data:any={"bookTitle":this.bookTitle}
  console.log(data)
}
}
