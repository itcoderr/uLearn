import { Icourse } from './course';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError,Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  private _url: string = "../assets/data/course.json";
  constructor(private http: HttpClient) { }

  getCourseData(): Observable<Icourse[]> {
    return this.http.get< Icourse[] >(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error"); 
  }

}
