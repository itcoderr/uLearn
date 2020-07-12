import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  public profileselect=true;
  

  constructor() { }

  ngOnInit(): void {
  }
  public something1="btn btn-light";
  public something2="btn btn-success";

  active(){
    if(this.something1=="btn btn-success"){
      this.profileselect=true;
      this.something2="btn btn-success"
      this.something1="btn btn-light"
    }
    else{
      this.profileselect=false;
      this.something1="btn btn-success"
      this.something2="btn btn-light"
    }
  }


}
