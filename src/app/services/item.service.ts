import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  api = environment.items;

  constructor(private http: HttpClient) {}

  getItemById(id: number){
    const path = this.api + id;
    return this.http.get(path); 
  }
}
