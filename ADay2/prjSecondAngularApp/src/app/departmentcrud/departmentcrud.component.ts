import { Component, OnInit } from '@angular/core';
import { Department } from '../Model/department';

@Component({
  selector: 'app-departmentcrud',
  templateUrl: './departmentcrud.component.html',
  styleUrls: ['./departmentcrud.component.css']
})
export class DepartmentcrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dept:Department[]=[
    {did:101,dname:"Finance",location:"Mumbai"},
    {did:102,dname:"HR",location:"Pune"},
    {did:103,dname:"Sales",location:"Delhi"},
    {did:104,dname:"Marketing",location:"Chennai"},
    {did:105,dname:"Management",location:"Banglore"}
  ];

  getdeptinfo:Department={};

  //Adding
  addDepartment(){
    this.dept.push(this.getdeptinfo);
    this.getdeptinfo={};
  }

  //Deleting
  msg:any;
  deleteDepartment(deptid?:number){
    for(let i=0;i<this.dept.length;i++)
    {
      if(this.dept[i].did==deptid){
        this.dept.splice(i,1);
        this.msg="Record Deleted!!!!"
      }
      else{
        this.msg="Record not Found!!!"
      }
    }
  }

  //Edit
  departmentid:any;
  EditDepartment(deptid?:number){
    for(let i=0;i<this.dept.length;i++)
    {
      if(this.dept[i].did==deptid)
      {
        this.getdeptinfo=this.dept[i];
      }
    } 
  }

  //Update
  updateDepartment(){
    let k = this.getdeptinfo.did;
    for(let i=0;i<this.dept.length;i++)
    {
      if(this.dept[i].did==k)
      {
        this.dept[i]=this.getdeptinfo;
        this.getdeptinfo={};
        this.msg="Record Updated!!!!"
      }
    }
  }

}
