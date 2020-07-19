import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-intro',
  templateUrl: './quiz-intro.component.html',
  styleUrls: ['./quiz-intro.component.css']
})
export class QuizIntroComponent implements OnInit {

  quizID : string;
  googleID : string;
  topicName : string;
  constructor() { }

  ngOnInit(): void {

    this.quizID= localStorage.getItem('quizID');
    this.googleID = localStorage.getItem('googleID');
    this.topicName = localStorage.getItem('topicName');
  }

}
