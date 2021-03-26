import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  query = '';
  products: Object;
  productInfo: Object;
  disabled = false;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProductResults("Laptop").subscribe(results =>{
      this.products = results["results"];
    });
  }

  showProducts() { 
    this.hideDetails();
    this.productService.getProductResults(this.query).subscribe(results =>{
      this.products = results["results"];
      console.log(this.products);
    });
  }

  showProduct(product: Object){
    this.disabled = true;
    this.productInfo = product;
    //this.router.navigate(['./product']);
  }

  hideDetails(){
    this.disabled = false;
  }

}
