import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {

  question : number =1;
  quizID : string ;
  googleID : string;
  topicName : string;
  questions : any;
  class1 :string = "btn btn-light";
  class2 :string = "btn btn-light";
  class3 :string = "btn btn-light";
  class4 :string = "btn btn-light";
  marks : number =0;
  quizoptions : boolean =true ;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    

    this.quizID= localStorage.getItem('quizID');
    
    this.topicName = localStorage.getItem('topicName');


    if(this.quizID){
      this.questiondetails();
    }

  }

  nextqsn(){
    this.quizoptions=true;
    this.class1  = "btn btn-light";
    this.class2  = "btn btn-light";
    this.class3  = "btn btn-light";
    this.class4  = "btn btn-light";
    this.question++;
  }
  submit(){
    localStorage.setItem('quiz-marks',String(this.marks));
    console.log(this.marks)
  }
  async questiondetails(){
    this.questions = await this.apiService.getquestions(this.quizID);
    this.googleID = localStorage.getItem('googleID');
    console.log(this.questions)
    }

  option1(){
    this.quizoptions=false;
    if(this.questions[this.question-1].option1 == this.questions[this.question-1].answer){
      this.class1  = "btn btn-success";
      this.class2  = "btn btn-light";
      this.class3  = "btn btn-light";
      this.class4  = "btn btn-light";
      this.marks++;
    }
    else{
      this.class1  = "btn btn-danger";
      if(this.questions[this.question-1].option2 == this.questions[this.question-1].answer){
        this.class2  = "btn btn-success";
        this.class3  = "btn btn-light";
        this.class4  = "btn btn-light";
      }
      else if(this.questions[this.question-1].option3 == this.questions[this.question-1].answer){
        this.class3  = "btn btn-success";
        this.class2  = "btn btn-light";
        this.class4  = "btn btn-light";
      }
      else if(this.questions[this.question-1].option4 == this.questions[this.question-1].answer){
        this.class4  = "btn btn-success";
        this.class3  = "btn btn-light";
        this.class2  = "btn btn-light";
      }
    }
  }
  option2(){
    this.quizoptions=false;
    if(this.questions[this.question-1].option2 == this.questions[this.question-1].answer){
      this.class2  = "btn btn-success";
      this.class1  = "btn btn-light";
      this.class3  = "btn btn-light";
      this.class4  = "btn btn-light";
      this.marks++;
    }
    else{
      this.class2  = "btn btn-danger";
      if(this.questions[this.question-1].option1 == this.questions[this.question-1].answer){
        this.class1  = "btn btn-success";
        this.class3  = "btn btn-light";
        this.class4  = "btn btn-light";
      }
      else if(this.questions[this.question-1].option3 == this.questions[this.question-1].answer){
        this.class3  = "btn btn-success";
        this.class1  = "btn btn-light";
        this.class4  = "btn btn-light";
      }
      else if(this.questions[this.question-1].option4 == this.questions[this.question-1].answer){
        this.class4  = "btn btn-success";
        this.class3  = "btn btn-light";
        this.class1  = "btn btn-light";
      }
    }
  }
  option3(){
    this.quizoptions=false;
    if(this.questions[this.question-1].option3 == this.questions[this.question-1].answer){
      this.class3  = "btn btn-success";
      this.class2  = "btn btn-light";
      this.class1  = "btn btn-light";
      this.class4  = "btn btn-light";
      this.marks++;
    }
    else{
      this.class3  = "btn btn-danger";
      if(this.questions[this.question-1].option2 == this.questions[this.question-1].answer){
        this.class2  = "btn btn-success";
        this.class1  = "btn btn-light";
        this.class4  = "btn btn-light";
      }
      else if(this.questions[this.question-1].option1 == this.questions[this.question-1].answer){
        this.class1  = "btn btn-success";
        this.class2  = "btn btn-light";
        this.class4  = "btn btn-light";
      }
      else if(this.questions[this.question-1].option4 == this.questions[this.question-1].answer){
        this.class4  = "btn btn-success";
        this.class2  = "btn btn-light";
        this.class1  = "btn btn-light";
      }
    }
  }
  option4(){
    this.quizoptions=false;
    if(this.questions[this.question-1].option4 == this.questions[this.question-1].answer){
      this.class4  = "btn btn-success";
      this.class2  = "btn btn-light";
      this.class3  = "btn btn-light";
      this.class1  = "btn btn-light";
      this.marks++;
    }
    else{
      this.class4  = "btn btn-danger";
      if(this.questions[this.question-1].option2 == this.questions[this.question-1].answer){
        this.class2  = "btn btn-success";
        this.class3  = "btn btn-light";
        this.class1  = "btn btn-light";
      }
      else if(this.questions[this.question-1].option3 == this.questions[this.question-1].answer){
        this.class3  = "btn btn-success";
        this.class2  = "btn btn-light";
        this.class1  = "btn btn-light";
      }
      else if(this.questions[this.question-1].option1 == this.questions[this.question-1].answer){
        this.class1  = "btn btn-success";
        this.class3  = "btn btn-light";
        this.class2  = "btn btn-light";
      }
    }
  }

}
