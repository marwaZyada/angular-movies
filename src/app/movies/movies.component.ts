import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent  {

  movies:any=[]
 
  image_path:string="https://image.tmdb.org/t/p/w500"
 

  constructor(private _AuthService:AuthService,private _activatedRoute:ActivatedRoute){}


  ngOnInit(): void {

 
    this._AuthService.getMovies().subscribe(res=>{console.log(res);
   this.movies=res.results
   
    })



  }
}
