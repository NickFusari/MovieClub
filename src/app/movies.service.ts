import { Injectable } from '@angular/core';
import { Signup } from './signup';
import { Router } from '@angular/router';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private router: Router) { }

  register(x: Signup){

    localStorage.setItem("User", JSON.stringify(x));
    this.router.navigate(["movies"]);
  }

  login(x:Login){

    let tempValue = JSON.parse(localStorage.getItem("User") || "");
    if(tempValue.email == x.email && tempValue.password == x.password){
      tempValue.logged = true;
      localStorage.setItem("User", JSON.stringify(tempValue));
      this.router.navigate(["movies"]);
    }
  }
}
