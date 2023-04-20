import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent  {

  movies:any=[];
  pages:number[]=new Array(10).fill(1).map((el,i)=>el+i)
page:number=1
 
  image_path:string="https://image.tmdb.org/t/p/w500"
 

  constructor(private _AuthService:AuthService,private _activatedRoute:ActivatedRoute){
   this.getMovie(this.page)
  }

  ngOnInit(): void {

    
this._activatedRoute.paramMap.subscribe((val:any)=>{this.page=Number(val.get('page'))
console.log(this.page);
})


  
    
     
 



  }
getMovie(page:number){
  if(page>0&&page<=10){
  this._AuthService.getMovies(page).subscribe(res=>{console.log(res);
    this.movies=res.results.slice(0,5)
    console.log(this.movies);
    
     })}
     else{
      this.page=1
      this._AuthService.getMovies(page).subscribe(res=>{console.log(res);
        this.movies=res.results.slice(0,5)
        console.log(this.movies);
     })}
    
}

}
