import { async } from '@angular/core/testing';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.css']
})
export class AllcoursesComponent implements OnInit {

  coursecategory : any;
  courseincategory =[];
  userobj=false;
  looprun=[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    //this.apiService.getAllCategory().subscribe( data => this.coursecategory = data);

    
    // for (let index = 0; index < this.coursecategory.length; index++) {
    //   console.log('5');
    //   var course :any;
    //   this.apiService.getallcoursesincategory(this.coursecategory[index].categoryID).subscribe( 
    //   res => course = res);
    //   this.courseincategory.push(course);
    // }

    this.getAsyncData();

    

  }
  async getAsyncData() {
      this.coursecategory = await this.apiService.getAllCategory();
      console.log('course category is resolved..');
      this.getAsyncData1();
    }

  async getAsyncData1(){
    for (let index = 0; index < this.coursecategory.length; index++) {
        var course :any;
        course = await this.apiService.getallcoursesincategory(this.coursecategory[index].categoryID);
        this.courseincategory.push(course);
        if(!((course.length)%4)){
          this.looprun.push((course.length/4)-1);
        }
        else{
          this.looprun.push( Math.floor(course.length/4));
        }
        
      }
      console.log(this.courseincategory);
      console.log(this.looprun);
      this.userobj=true;
  }

}
