import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { RouterModule, Routes } from '@angular/router';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"usersignup",
    component:UserSignupComponent
  },
  {
    path:"usersignin",
    component:UserSigninComponent
  },
  {
    path:"bookentry",
    component:BookEntryComponent
  },
  {
    path:"bookedit",
    component:BookEditComponent
  },
  {
    path:"bookdelete",
    component:BookDeleteComponent
  },
  {
    path:"booksearch",
    component:BookSearchComponent
  },
  {
    path:"bookissue",
    component:BookIssueComponent
  },
  {
    path:"viewallbooks",
    component:ViewAllBooksComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    UserSignupComponent,
    UserSigninComponent,
    NavbarHomeComponent,
    BookEntryComponent,
    BookSearchComponent,
    BookEditComponent,
    BookDeleteComponent,
    BookIssueComponent,
    ViewAllBooksComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
