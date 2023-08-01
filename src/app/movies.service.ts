import { Injectable } from '@angular/core';
import { Signup } from './signup';
import { Router } from '@angular/router';
import { Login } from './login';
import { Movie } from './movie';
import * as jsonData from "../assets/data.json";

@Injectable({
  providedIn: 'root'
})
export class MoviesService{

  movieCollection: Array<Movie> = JSON.parse(JSON.stringify(jsonData)).default;

  constructor(private router: Router) {

    this.loadMovies();
   }

  register(x: Signup){

    x.logged = true;
    localStorage.setItem("User", JSON.stringify(x));
    this.router.navigate(["movies"]);
  }

  login(x:Login){

    let tempValue: Signup = JSON.parse(localStorage.getItem("User") || "");
    if(tempValue.email == x.email && tempValue.password == x.password){
      tempValue.logged = true;
      localStorage.setItem("User", JSON.stringify(tempValue));
      this.router.navigate(["movies"]);
    }
  }

  logout(){

    let tempValue: Signup = JSON.parse(localStorage.getItem("User") || "");
    tempValue.logged = false;
    localStorage.setItem("User", JSON.stringify(tempValue));
    this.router.navigate(["auth"]);
  }

  isLogged(){

    let tempValue: Signup = JSON.parse(localStorage.getItem("User") || "");
    if(tempValue.logged !== true){

      this.router.navigate(["auth"]);
    }
  }

  loadMovies(){
     if(localStorage.getItem("list") !== null){

        this.movieCollection = JSON.parse(localStorage.getItem("list") || "");
     }
  }
}
