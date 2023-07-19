import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { MoviesComponent } from './movies/movies.component';
import { CreatemovieComponent } from './createmovie/createmovie.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo: "movies"},
  {path:"auth", component:LoginSignupComponent},
  {path:"movies", component:MoviesComponent},
  {path:"create", component:CreatemovieComponent},
  {path:"**", pathMatch:"full", redirectTo: "movies"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
