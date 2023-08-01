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
  searchedList:Array<Movie> = this.service.movieCollection;

  constructor(public service: MoviesService){

    service.loadMovies();
    service.isLogged();
  }


  search(){

    this.searchedList = this.service.movieCollection.filter(x => x.title.toLowerCase().includes(this.searchParams.title.toLowerCase()) && x.rating >= this.searchParams.rating && x.release > this.searchParams.release);
  }

  reset(){

    this.searchedList = this.service.movieCollection;
  }
}
