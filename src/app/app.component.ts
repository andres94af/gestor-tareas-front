import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  constructor(private loginService:LoginService, private router:Router){

  }

  logueado(){
    if (this.loginService.getToken()) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['']);
  }
}
