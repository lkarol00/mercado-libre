import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  query = "";

  constructor() { }

  ngOnInit(): void {
    //this.initProduct();
  }

  searchProduct(){
    if(this.query != ""){
      //this.productsComponent.showProducts(this.query);
    }
  }

  initProduct(){
    //this.productsComponent.showProducts("Laptop");
  }


}
