import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
trendingsMovis:any[]=[]
trendingsTvs:any[]=[]
trendingsPeoples:any[]=[]
image_path:string="https://image.tmdb.org/t/p/w500"
  constructor(private _AuthService:AuthService){}

ngOnInit(): void {
  this._AuthService.getTrending('movie').subscribe(res=>{console.log(res.results)
  this.trendingsMovis=(res.results).filter((el:any)=>el.title!=null).slice(0,10)
  });


  this._AuthService.getTrending('tv').subscribe(res=>{console.log(res.results)
  this.trendingsTvs=(res.results).slice(0,10)
  });


  this._AuthService.getTrending('person').subscribe(res=>{console.log(res.results)
  this.trendingsPeoples=(res.results).slice(0,10)
  console.log(this.trendingsPeoples);
  
  });



}
}
