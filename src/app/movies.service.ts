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

  movieCollection: Array<Movie> = jsonData;

  constructor(private router: Router) {

    this.loadMovies();
    console.log(this.movieCollection[0]);
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

  loadMovies(){
     console.log(this.movieCollection);
  }
}
