import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SellersInterface } from '../models/sellers.interface';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  api = environment.sellers;

  constructor(private http: HttpClient) {}

  getSellerById(id: number){
    const path = this.api + id;
    return this.http.get<SellersInterface>(path); 
  }

}
