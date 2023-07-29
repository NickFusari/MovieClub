import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  searchParams: Movie = new Movie();
  rating:number = 1;

  constructor(public service: MoviesService){

    service.loadMovies();
  }
}
