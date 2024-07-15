import { Component } from '@angular/core';
import { Db } from '../models/db';
import { DbService } from '../services/db.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  user:Db[]=[];
  login!:FormGroup;
  constructor(private service:DbService,private fb:FormBuilder){}
  ngOnInit():void{
    this.getall();
    this.init();
  }
  init():void{
    this.login=this.fb.group({
      name:['',[Validators.required,Validators.maxLength(40),Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.maxLength(10),Validators.minLength(4)]]

    })
  }
  getall():void{
    this.service.getall().subscribe(data=> this.user=data);
  }
adduser():void{
  const used:Db={...this.login.value,id:this.inc()}
  this.service.adduser(used).subscribe(()=>{
    this.getall();
  })

}
inc():number{
  return this.user.length>0?Math.max(...this.user.map((record)=>record.id || 0))+1:1

}

}
