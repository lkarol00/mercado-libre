import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { SellerService } from 'src/app/services/seller.service';
import { ProductService } from '../../services/product.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  query = '';
  products: Object;
  disabled = false;
  productInfo: Object;
  name: any;
  page = 0;
  pageSize = 50;
  search = '';


  constructor(private productService: ProductService, private router: Router, 
              private sellerService: SellerService, private itemService: ItemService,
              private scroll: ViewportScroller) { }

  ngOnInit(): void {
    this.query = "Laptop";
    this.showProducts();
    this.query ="";
  }

  showProducts() { 
    this.hideDetails();
    this.search = this.query;
    this.productService.getProductResults(this.query).subscribe(results => {
      results["results"].forEach(result => {
        this.sellerService.getSellerById(result.seller["id"]).subscribe(el => result.seller_name = el["nickname"]);
        this.itemService.getItemById(result.id).subscribe(el =>result.main_picture = el["pictures"][0]["url"]);
      });
      this.products = results["results"];
    });
    this.query ="";
  }

  showProduct(product: Object){
    this.disabled = true;
    this.productInfo = product;
  }

  hideDetails(){
    this.disabled = false;
  }

  pagination(pageButton: number) { 
    this.hideDetails();
    
    this.productService.getPaginationResults(this.search, pageButton * 50).subscribe(results => {
      results["results"].forEach(result => {
        this.sellerService.getSellerById(result.seller["id"]).subscribe(el => result.seller_name = el["nickname"]);
        this.itemService.getItemById(result.id).subscribe(el =>result.main_picture = el["pictures"][0]["url"]);
      });
      this.products = results["results"];
      this.scrollToTop();
    });
    this.query ="";
  }

  scrollToTop(){
      this.scroll.scrollToPosition([0,0]);
  }

  changePagination(tipo: string){
    if (tipo === "+") {
      this.page = this.page + 1;
    } else {
      this.page = this.page - 1;
    }
  }
}
