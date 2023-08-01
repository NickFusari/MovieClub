import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.css']
})
export class CreatemovieComponent {
  
 value:number = 0;
 actual:Movie = new Movie();
 constructor(public service:MoviesService, public router:Router){ 

  service.isLogged();
 }

 submit(m: Movie){

  this.service.movieCollection.push(m);
  localStorage.setItem("list", JSON.stringify(this.service.movieCollection));
  this.service.loadMovies();
  this.router.navigate(["movies"]);
 }
}
