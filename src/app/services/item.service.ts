import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private api = 'https://api.mercadolibre.com/items/'

  constructor(private http: HttpClient) {}

  getItemById(id: number){
    const path = this.api + id;
    return this.http.get(path); 
  }
}
