import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

var httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type':'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials' : 'true'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public signin(customer: Customer){
    return this.httpClient.post('http://localhost:8080/signin',customer, httpOptions);
}

public signout(customer: Customer){
  return this.httpClient.put('http://localhost:8080/signout',customer, httpOptions);
}

public getAllCategory(){
return this.httpClient.get('http://localhost:8080/getallcategory', httpOptions).toPromise();
}

public getallcoursesincategory(categoryid : string){
  return this.httpClient.get(`http://localhost:8080/getallcoursesincategory?catID=${categoryid}`, httpOptions).toPromise();
}

public getAllTopics(courseid : string){
  return this.httpClient.get(`http://localhost:8080/getalltopics?courseID=${courseid}`, httpOptions).toPromise();
}

public enrollcourses(googleid : string,courseid : string){
  return this.httpClient.post(`http://localhost:8080/enrollcourses?googleID=${googleid}&courseID=${courseid}`, httpOptions).toPromise();
}

public getenrollcourses(googleid : string){
  return this.httpClient.get(`http://localhost:8080/getenrolledcourses?googleID=${googleid}`, httpOptions).toPromise();
}

public getcoursedetails(courseid : string){
  return this.httpClient.get(`http://localhost:8080/getcoursedetails?courseID=${courseid}`, httpOptions).toPromise();
}

public getquestions(quizid : string){
  return this.httpClient.get(`http://localhost:8080/getquestions?quizID=${quizid}`, httpOptions).toPromise();
}

public submitquiz(googleid : string,quizid : string){
  return this.httpClient.post(`http://localhost:8080/submitquiz?googleID=${googleid}&quizID=${quizid}`, httpOptions).toPromise();
}

public deleteUser(googleID : string){
  return this.httpClient.delete('http://localhost:8080/delete', httpOptions);
}

public updateUser(customer: Customer){
  return this.httpClient.put('http://localhost:8080/update',customer, httpOptions);
}

}
