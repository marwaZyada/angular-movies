import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {

  actors:any=[]
 
  image_path:string="https://image.tmdb.org/t/p/w500"
 

  constructor(private _AuthService:AuthService,private _activatedRoute:ActivatedRoute){}


  ngOnInit(): void {

 
    this._AuthService.getPeoples().subscribe(res=>{console.log(res);
   this.actors=res.results
   
    })



  }}
