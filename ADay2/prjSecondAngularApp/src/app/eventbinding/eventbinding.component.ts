import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }
  //Eg1
  welcomeMsg(){
    debugger;
    alert("Good Morning!!!")
  }

  //Eg2
  fname:string="";
  displayfullName(name : HTMLInputElement){
    this.fname=name.value+"Kumar";
  }

  //Eg3
  calbonus:number=0;
  displayBonus(sal : HTMLInputElement){
    this.calbonus = parseInt(sal.value)+1000;
  }

  ngOnInit(): void {
  }

}
