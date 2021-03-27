import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResultsInterface } from '../models/results.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = 'https://api.mercadolibre.com/sites/MCO/search?q='

  constructor(private http: HttpClient) {}

  getProductResults(product: string){
    const path = this.api + product;
    return this.http.get<ResultsInterface[]>(path); 
  }

  getPaginationResults(product: string, offset: number){
    const path = this.api + product + "&offset=" + offset;
    return this.http.get<ResultsInterface[]>(path); 
  }

}
