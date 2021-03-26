import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SharingService } from 'src/app/services/sharing.service';
import { ProductsComponent } from '../products/products.component'

@Component({
  selector: 'app-navbar',
  providers: [ ProductsComponent ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  ngOnInit(): void {
  }

  /*query= '';

  constructor(private sharingService: SharingService, private productsComponent: ProductsComponent){}

  searchProduct(){
    //this.sharingService.setData(this.query);
    this.productsComponent.searchProduc();
  }*/
}
