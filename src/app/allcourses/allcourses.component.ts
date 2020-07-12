import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.css']
})
export class AllcoursesComponent implements OnInit {

  categories = ['Frontend', 'Banckend', 'Programming', 'Tornado','Bombasto', 'Magneta', 'Tornado'];
  coursecategory : any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllCategory().subscribe( data => this.coursecategory = data);
  }

}
