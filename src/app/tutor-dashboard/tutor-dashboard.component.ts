import { CourseDataService } from './../course-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.css']
})
export class TutorDashboardComponent implements OnInit {
  
  public showCourses=false;
  public coursedata=[];
  public errorMsg;
  
  constructor(private _coursedata: CourseDataService) { }

 

  ngOnInit() {
    this._coursedata.getCourseData()
                    .subscribe(data => this.coursedata = data ,
                              error => this.errorMsg = error);
  }
}
