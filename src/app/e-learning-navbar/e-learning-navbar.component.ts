import { Customer } from './../customer';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-e-learning-navbar',
  templateUrl: './e-learning-navbar.component.html',
  styleUrls: ['./e-learning-navbar.component.css']
})
export class ELearningNavbarComponent implements OnInit{

  user: SocialUser;
  getdata : any ;
  customer1 : Customer;
  userobj = true;

  errormsg : any;

  myStorage = window.localStorage;
  
  constructor(private authService: SocialAuthService,private apiService: ApiService) { }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });

    

    // this.apiService.getUser('0395020').subscribe( data => this.getdata = data);
    
    // this.apiService.deleteUser('01012020').subscribe( (res) => {
    // console.log("User Deleted successfully !!");
    // });

    
  }

  sso(){
    if(this.userobj) {this.sendSignInObject();}
    this.userobj=false;
    
  }

  sendSignInObject(){

    localStorage.setItem('email',this.user.email);
    localStorage.setItem('googleID',this.user.id);
    localStorage.setItem('name',this.user.name);
    localStorage.setItem('photo',this.user.photoUrl);
    
    var customer ={

      "email" : this.user.email,
      "googleID" : this.user.id,
      "loggedIN" : "true",
      "name" : this.user.name,
      "photo" : this.user.photoUrl,
      "iat" : "xyz"
     }
      this.customer1 ={
      "email" : this.user.email,
      "googleID" : this.user.id,
      "loggedIN" : "false",
      "name" : this.user.name,
      "photo" : this.user.photoUrl,
      "iat" : "xyz"

     }
     
     this.apiService.signin(customer).subscribe(res=>{
      this.errormsg = res;
    });

  }
  sendSignOutObject(){
      localStorage.clear();
      this.apiService.signout(this.customer1).subscribe((res)=>{
      this.errormsg = res;
    });

  }

  

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.userobj=true;
  }

  signOut(): void {
    this.authService.signOut();
    window.location.reload();
  }



}

