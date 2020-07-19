import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  quizID : string ;
  googleID : string;
  submit  : any;
  marks : string;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.quizID= localStorage.getItem('quizID');
    this.googleID = localStorage.getItem('googleID');
    if(this.quizID){
      this.submitq();
    }

    this.marks = localStorage.getItem('quiz-marks');

  }

  async submitq(){
    this.submit = await this.apiService.submitquiz(this.googleID,this.quizID);
    }

}
