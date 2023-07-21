import { Component } from '@angular/core';
import { Login } from '../login';
import { Signup } from '../signup';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {

  login: Login = new Login();
  register: Signup = new Signup();

  constructor(public service: MoviesService){}
}
