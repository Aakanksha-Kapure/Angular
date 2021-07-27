import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registerreactive',
  templateUrl: './registerreactive.component.html',
  styleUrls: ['./registerreactive.component.css']
})
export class RegisterreactiveComponent implements OnInit {

  registrationform;
  constructor(private fb:FormBuilder) { 
    /*this.loginform=new FormGroup(
      {mailid:new FormControl(null,[Validators.required,Validators.email]),pwd:new FormControl(null,Validators.required)}*/

    this.registrationform=this.fb.group({
      mailid:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required]],
      
    })
  }

  ngOnInit(): void {
  }

}
