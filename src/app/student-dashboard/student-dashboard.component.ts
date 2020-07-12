import { CourseDataService } from './../course-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  public showenrolledCourses=false
  public exploreCourses=false
  public coursedata=[] 
  public errorMsg;
  constructor(private _coursedata: CourseDataService) { }

  ngOnInit() {
    this._coursedata.getCourseData()
                    .subscribe(data => this.coursedata = data ,
                              error => this.errorMsg = error);
  }

}
