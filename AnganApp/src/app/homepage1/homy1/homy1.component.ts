
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-homy1',
  templateUrl: './homy1.component.html',
  styleUrls: ['./homy1.component.css']
})
export class Homy1Component implements OnInit {
  c:any={};

  constructor(private service:MyserviceService) { }

  ngOnInit() {
    this.getCount();
    
  }
  getCount(){
    this.service.getCount().subscribe((res)=>{
      this.c.ac=res.ac; 
      this.c.sc=res.sc;
      this.c.pc=res.pc;
      this.c.wc=res.wc;
      this.c.cc=res.cc;
      
    },
    (err)=>{
      alert(err);
    });  

  }
}
