import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {

  //Declaring Variables
  name:string="SRI";
  age:number;
  hobbies:string[] | undefined;
  marks:Array<number> | undefined;
  Istrue:boolean;
  tupleval:[string,number,boolean];
  dynamicvalue:any;
  student:any;
  picture="assets/images/Doll.jpg"

  constructor() {

    this.age=30;
    this.hobbies=["Playing","Singing"];
    this.marks=[90,78,89];
    this.Istrue=false;
    this.tupleval=["Pune",1200,true];
    this.dynamicvalue=89;
    this.student={fathername:"Raj",Address:"TNB Road,Chennai-42"};
   }

  ngOnInit(): void {
  }

}
