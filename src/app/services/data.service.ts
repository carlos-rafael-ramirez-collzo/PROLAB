import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getUsers () {
    return this.http.get('https://jsonplaceholder.typicode.com/users'); 
  }

  getAlbumes() {
    return this.http.get<any[]>('assets/data/albums.json');
  }
}
