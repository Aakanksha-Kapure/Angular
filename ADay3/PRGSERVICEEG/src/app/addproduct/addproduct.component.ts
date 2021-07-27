import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Model/product';
import { ProductService } from '../ProductService';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private prser:ProductService, private route:ActivatedRoute) { }

  getprodinfo: Product={};

  prod?:Product[];
  ngOnInit(): void {
    //this.addproductDetail();
  }


  addproductDetail(){
    this.prser.addProducts(this.getprodinfo);
  }

  
  

}
