import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { ProductService } from '../ProductService';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {

              //Injecting the service
  constructor(private pservice:ProductService) { } //created obj of ProductService 

  pro?:Product[];
  ngOnInit(): void {
    this.displayProductDetails();
  }

  // call get products from getservice
  displayProductDetails(){
    this.pro=this.pservice.getProducts();
  }

}
