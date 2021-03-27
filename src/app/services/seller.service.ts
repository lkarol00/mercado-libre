import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SellersInterface } from '../models/sellers.interface';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private api = 'https://api.mercadolibre.com/users/'

  constructor(private http: HttpClient) {}

  getSellerById(id: number){
    const path = this.api + id;
    return this.http.get<SellersInterface>(path); 
  }

}
