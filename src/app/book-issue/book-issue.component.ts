import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {
bName=""
dateIssue=""
membershipNo=""

readValue=()=>
{
  let data:any={"bname":this.bName,"dateIssue":this.dateIssue,"membershipNo":this.membershipNo}
  console.log(data)
}
}
