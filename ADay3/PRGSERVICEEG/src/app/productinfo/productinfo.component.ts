import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../ProductService';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  constructor(private pser: ProductService, private route:ActivatedRoute) { }

  pid?:any;
  ngOnInit(): void {
    //getting id from url
    /*this.route.paramMap.subscribe((params:ParamMap)=>{
      this.pid=(params.get('id'))
    });
    this.getSelectedProduct();*/

    //getting id from url another way
    this.getSelectedProduct()
  }
  //call the getProductInfo from product service by passing productid
  selectedpro:any;
  getSelectedProduct(){
    //this.selectedpro=this.pser.getProductInfo(this.pid);
    this.selectedpro=this.pser.getProductInfo(this.route.snapshot.params.id)
  }

}
