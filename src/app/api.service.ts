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

public getUser(googleID : string){
  return this.httpClient.get('http://localhost:8080/get', httpOptions);
}

public deleteUser(googleID : string){
  return this.httpClient.delete('http://localhost:8080/delete', httpOptions);
}

public updateUser(customer: Customer){
  return this.httpClient.put('http://localhost:8080/update',customer, httpOptions);
}

}
