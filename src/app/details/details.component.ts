import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  item:any={}
  
  id!:any
  media_type!:any
  image_path:string="https://image.tmdb.org/t/p/w500"
  similars:any[]=[]

  constructor(private _AuthService:AuthService,private _activatedRoute:ActivatedRoute,private _router:Router){}


  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(res=>{this.id=res.get('id')
  console.log(this.id);
  this.media_type=res.get('media_type')
  console.log(this.media_type);
  
  })
    this._AuthService.getDetails(this.media_type,this.id).subscribe(res=>{console.log(res);
   this.item=res
   
    })


    this._AuthService.getSimilar(this.media_type,this.id).subscribe(res=>{console.log(res.results);
    this.similars=res.results.filter((el:any)=>el.poster_path).slice(0,6)
   
    })

   

  }
  getAnotherDetails(media_type:string,id:string){
    this._AuthService.getDetails(media_type,id).subscribe(res=>{console.log(res);
      this.item=res

       })
  this.getAnotherSimilars(media_type,id)
  }


  getAnotherSimilars(media_type:string,id:string){
    this._AuthService.getSimilar(media_type,id).subscribe(res=>{console.log(res.results);
      this.similars=res.results.filter((el:any)=>el.poster_path).slice(0,6)
     
      })
  }


}
