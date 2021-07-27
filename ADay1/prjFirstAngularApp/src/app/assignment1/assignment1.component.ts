import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  constructor() { }
  car: any[]=[
    {"name":"BMW","number":"1234","colour":"Red"},
    {"name":"Audi","number":"2245","colour":"Black"},
    {"name":"Toyota","number":"2671","colour":"Red"},
    {"name":"Ford","number":"2384","colour":"White"},
    {"name":"Jaguar","number":"5678","colour":"Blue"},
  ]

  ngOnInit(): void {
  }

}
