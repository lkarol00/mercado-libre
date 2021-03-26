import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  /*product = {
    'url': "http://http2.mlstatic.com/D_711129-MCO44819077518_022021-O.jpg",
    'title': "Portátil Huawei Matebook 13 I5 8+512gb",
    'price': 3379900
  }*/

  products: Object = null;

  ngOnInit(): void {
    this.productService.getProductResults("Laptop").subscribe(results =>{
      this.products = results["results"];
    });
  }

  showProducts(query: string){
    this.productService.getProductResults(query).subscribe(results =>{
      this.products = results["results"];
    });
  }

}
