import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  bTitle=""
  bAuthor=""
  bPublisher=""
  bDescription=""
  bLanguage=""
  bDistributor=""
  bReleasedYear=""
  bPrice=""
  readValue=()=>
  {
    let data:any={"bTitle":this.bTitle,"bAuthor":this.bAuthor,"bPublisher":this.bPublisher,"bDescription":this.bDescription,"bLanguage":this.bLanguage,"bDistributor":this.bDistributor,"bReleasedYear":this.bReleasedYear,"bPrice":this.bPrice}
    console.log(data)
  }




}
