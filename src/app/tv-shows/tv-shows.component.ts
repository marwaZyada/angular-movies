import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
 tvs:any=[]
 
  image_path:string="https://image.tmdb.org/t/p/w500"
 

  constructor(private _AuthService:AuthService,private _activatedRoute:ActivatedRoute){}


  ngOnInit(): void {

 
    this._AuthService.getTvs().subscribe(res=>{console.log(res);
   this.tvs=res.results
   
    })}
  }