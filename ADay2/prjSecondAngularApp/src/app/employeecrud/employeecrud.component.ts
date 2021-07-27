import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/employee';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css']
})
export class EmployeecrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emp:Employee[]=[
    {eid:1001,ename:"Sri",gender:"male",salary:30000},
    {eid:1002,ename:"Raj",gender:"male",salary:35000},
    {eid:1003,ename:"Banu",gender:"female",salary:25000},
    {eid:1004,ename:"Jamuna",gender:"fmale",salary:40000},
  ];
  //creating object of any
  //getempinfo:any={};
  //Object of type employee
  getempinfo:Employee={};

  //adding employee details to emp array
  addEmployee(){
    debugger;
    this.emp.push(this.getempinfo);
    this.getempinfo={};//Emptying the object
  }
  msg:any;
  deleteEmployee(empid?:number){
    debugger
    for(let i=0;i<this.emp.length;i++)//iterate through array
    {
      if(this.emp[i].eid==empid)//particular emp id exists
      {
        this.emp.splice(i,1);//slice is an array method to remove one method at a time
        this.msg="Record Deleted!!!!";
  
      }
      else{
        this.msg="Record not Found!!!!";
      }
    }
    
  }

  //edit
  employeeid: any;
  EditEmployee(empid?:number){
    for(let i=0;i<this.emp.length;i++)//iterate thrpugh array
    {
      if(this.emp[i].eid==empid)//particular emp id exist
      {
        this.getempinfo=this.emp[i];
      }
    }
  }

  //updating the edited info
  updateEmployee(){
    let k = this.getempinfo.eid;
    for(let i=0;i<this.emp.length;i++)//iterate through array
    {
      if(this.emp[i].eid==k){
        this.emp[i]=this.getempinfo;
        this.getempinfo={};
        this.msg="Record updated!!!!"
      }
    }
  }

}
