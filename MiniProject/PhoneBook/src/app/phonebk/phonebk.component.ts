import { Component, OnInit } from '@angular/core';
import { Phonebook } from '../Model/phonebook';

@Component({
  selector: 'app-phonebk',
  templateUrl: './phonebk.component.html',
  styleUrls: ['./phonebk.component.css']
})
export class PhonebkComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  contacts:Phonebook[] = [
    {pid:1,fname:"Eric",lname:"Elliot",phoneno:"222-555-6725"},
    {pid:2,fname:"Steve",lname:"Jobs",phoneno:"222-555-6725"},
    {pid:3,fname:"Fred",lname:"Allen",phoneno:"222-555-6725"},
    {pid:4,fname:"Steve",lname:"Wozniak",phoneno:"222-555-6725"},
    {pid:5,fname:"Bill",lname:"Gates",phoneno:"222-555-6725"}
  ];

  getphno:Phonebook={};

  /*addPhone(){
    this.contacts.push(this.getphno);
    this.getphno={};
  }*/
  mssg:string="";
  flag:boolean=false;
  deleteContact(id?:number)
  {
    for(let i=0;i< this.contacts.length;i++)
    {
        if(this.contacts[i].pid==id)
        {
          this.contacts.splice(i,1);
          this.flag=true;
          break;
        }

    }
    if(this.flag)
    {
      this.mssg="Record Deleted!!";
    }
    else{
      this.mssg="Record Not found!";
    }
  }

}
