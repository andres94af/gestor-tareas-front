import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credenciales } from './model/models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  urlLogin = "http://localhost:8080/login";

  login(credenciales:Credenciales){
    return this.http.post(this.urlLogin, credenciales, {
      observe: 'response'
    }).pipe(map(
      (response) => {
        const body = response.body;
        const headers = response.headers;

        const bearerToken = headers.get("Authorization")!;
        const token = bearerToken.replace("Bearer ", "");

        localStorage.setItem("token", token);

        return body;
      }
    ))
  }

  getToken(){
    return localStorage.getItem("token");
  }


}
