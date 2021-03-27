import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';

import { ProductService } from './services/product.service';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SellerService } from './services/seller.service';
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ProductService, SellerService, ItemService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
