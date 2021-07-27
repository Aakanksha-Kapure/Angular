import { Injectable } from "@angular/core";
import { Product } from "./Model/product";

@Injectable()
export class ProductService
{
    product:Product[];
    constructor()
    {
        this.product=[
            {pid:11,pname:'pencil',price:10,quantity:10,image:'assets/images/pencil.jpg',desc:'No Discount'},
            {pid:12,pname:'ball',price:100,quantity:5,image:'assets/images/ball.jpg',desc:'10 % Discount'},
            {pid:13,pname:'doll',price:250,quantity:30,image:'assets/images/doll.jpg',desc:'50 % Discount'}
        ];
    }

    //fetch all product info
    getProducts(){
        return this.product;
    }

    //fetch particular product details by passing pid
    
    getProductInfo(prodid:any){
        let pinfo;
        this.product.forEach(ele=>{
            if(ele.pid==prodid)
            {
                pinfo=ele;
            }
        });
        return pinfo;
    }

    //add
    
    addProducts(p:Product){
        this.product.push(p);
        
    }

}