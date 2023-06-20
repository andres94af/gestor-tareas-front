import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Credenciales } from '../model/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  cred:Credenciales={
    email: '',
    password: ''
  };

  constructor(private loginService:LoginService, private router:Router){
  }

  login(){
    this.loginService.login(this.cred).subscribe(
      response =>{
        this.router.navigate(['/tareas'])
      }
    )
  }

}
