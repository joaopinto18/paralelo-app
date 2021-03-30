import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpreq:HttpClient) { }

  sendMessage(body){
    let headers ={
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpreq.post("http://localhost:3000/email",body,headers);
  }

}
