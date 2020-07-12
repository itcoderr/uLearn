import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'googleID': '01012020' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private httpClient: HttpClient) { }

  public signin(customer: Customer){
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Access-Control-Allow-Methods', '*');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
    return this.httpClient.post('http://localhost:8080/signin',customer, httpOptions);
}

public signout(customer: Customer){
  httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  httpOptions.headers.append('Access-Control-Allow-Methods', '*');
  httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
  return this.httpClient.put('http://localhost:8080/signout',customer, httpOptions);
}

public getAllCategory(){
  httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  httpOptions.headers.append('Access-Control-Allow-Methods', '*');
  httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
return this.httpClient.get('http://localhost:8080/getallcategory', httpOptions);
}

public getUser(googleID : string){
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Access-Control-Allow-Methods', '*');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
  return this.httpClient.get('http://localhost:8080/get', httpOptions);
}

public deleteUser(googleID : string){
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Access-Control-Allow-Methods', '*');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
  return this.httpClient.delete('http://localhost:8080/delete', httpOptions);
}

public updateUser(customer: Customer){
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Access-Control-Allow-Methods', '*');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
  return this.httpClient.put('http://localhost:8080/update',customer, httpOptions);
}

}
