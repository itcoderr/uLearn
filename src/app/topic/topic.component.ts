import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  courseID : string;
  courseName : string;
  courses : any;
  object : boolean = true;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    

    this.courseID = localStorage.getItem('courseID');
    this.courseName = localStorage.getItem('courseName');
    console.log('course ID : '+this.courseID);
    console.log('course Name : '+this.courseName);

    this.getTopic();
  }

  async getTopic() {
    this.courses = await this.apiService.getAllTopics(this.courseID);
    console.log(this.courses);
    this.object=false;
  }

  getquizID(quizid : string,topicname : string){
    localStorage.setItem('quizID',quizid);
    localStorage.setItem('topicName',topicname);
  }

}
