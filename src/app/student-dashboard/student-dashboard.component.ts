import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  coursedata :any;
  enrolledcourses = [];
  googleid : string;
  object : boolean = true;
  courseID : string;
  courseName : string;
  constructor(private apiservice : ApiService) { }

  ngOnInit() {
    this.googleid = localStorage.getItem('googleID');
    this.fncall();
  }

  async fncall(){
    this.coursedata = await this.apiservice.getenrollcourses(this.googleid);
    console.log(this.coursedata)
    this.anotherfn();
  }

  async anotherfn(){
    for (let index = 0; index < this.coursedata.length; index++) {
      var temp : any;
      temp = await this.apiservice.getcoursedetails(this.coursedata[index].courseID)
      console.log(temp)
      this.enrolledcourses.push(temp);      
    }
    this.object = false;
    console.log(this.enrolledcourses);
  }

  getCourseID(cid : string ,cname : string){
    this.courseID = cid ; 
    this.courseName = cname ; 
    localStorage.setItem('courseID' , this.courseID);
    localStorage.setItem('courseName' , this.courseName);
  }

}
