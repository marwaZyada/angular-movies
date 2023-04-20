import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
token!:string
key:string='580f4a457a7dd480b0592ac9ccc32be9';

  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    this.token=localStorage.getItem('token')||""
   }

  register(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', userData)

  }
  login(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin', userData)

  }
  logout(){
   
    localStorage.removeItem('token')
    this.token=localStorage.getItem('token')||""
   this._Router.navigate(['/login'])
    
  }

  getTrending(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${this.key}`)
  }


  getMovies(page:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
  }

  getTvs():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`)
  }

  getPeoples():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=${this.key}&language=en-US&page=1`)
  }

getDetails(mediaType:string,id:string):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${this.key}&language=en-US`)
}
getSimilar(mediaType:string,id:string):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=${this.key}&language=en-US`)
}


}
