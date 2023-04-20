import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ActorsComponent } from './actors/actors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'home' ,canActivate:[AuthGuardGuard] ,component:HomeComponent},
  {path:'movie' , canActivate:[AuthGuardGuard] ,component:MoviesComponent},
  {path:'movie/:page' , canActivate:[AuthGuardGuard] ,component:MoviesComponent},
  {path:'tv' , canActivate:[AuthGuardGuard] ,component:TvShowsComponent},
  {path:'actors' , canActivate:[AuthGuardGuard] ,component:ActorsComponent},
  {path:'details/:id/:media_type' , canActivate:[AuthGuardGuard] ,component:DetailsComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
