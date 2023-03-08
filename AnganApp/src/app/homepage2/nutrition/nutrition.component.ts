import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NutritionService } from 'src/app/services/nutrition.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  categories;
  category='women';
  catData;
  catClicked=false;
  pdata;
  ddata;
  cdata;
  fdata:any=[];
  closer;
  constructor(private ns:NutritionService,private router:Router) { }

  ngOnInit() {
    console.log('started');
    this.fdata=[];
    this.ns.getCategories().subscribe((res)=>{
      this.categories=res.result;
      console.log(res.result);
    },
    (err)=>{});

  }
  //the initilizer of process
  testNutrition(c){
    this.closer='';
    this.catClicked=true;
    console.log(c);
    this.catData=c;
    if(c.cfor=='p'){
      this.category='Women';
      this.ns.getPregnants(sessionStorage.aid).subscribe(
        (res)=>{
          this.fdata=[];
          this.pdata=res.result;
          this.calcarryage();
          for(const p of this.pdata){
            if(p.pca>=c.cbeg && p.pca<=c.cend){
              const data={
                uid:p.puid,
                uname:p.pname
              }
              
              this.fdata.push(data);
              
            }
          }
        },
        (err)=>{}
      );

    }
    else if(c.cfor=='d'){
      this.category='Women';
      this.ns.getDelivered(sessionStorage.aid).subscribe(
        (res)=>{
          this.fdata=[];
          this.ddata=res.result;
          console.log(res.result,'d');
          this.caldelperiod();
          for(const d of this.ddata){
            if(d.pdp>=c.cbeg && d.pdp<=c.cend){
              const data={
                uid:d.puid,
                uname:d.pname
              }
              
              this.fdata.push(data);
              
            }
          }
          console.log(this.fdata);
        },
        (err)=>{}
      );

    }
    else{
      this.category='Children';
      this.ns.getChildren(sessionStorage.aid).subscribe(
        (res)=>{
          this.fdata=[];
          this.cdata=res.result;
          console.log(res.result,'c');
          this.calchildage();
          for(const ch of this.cdata){
            if(ch.cage>=c.cbeg && ch.cage<=c.cend){
              const data={
                uid:ch.cuid,
                uname:ch.cname
              }
              
              this.fdata.push(data);
              
            }
          }
          console.log(this.fdata,this.categories);
        },
        (err)=>{}
      );

    }
  }


  //calculating the carry age
  calcarryage(){
    for(const p of this.pdata){
      if(p.delivery==false){
      const rd=new Date(p.pdoc);
      const cd=new Date();
      const diffInMs = cd.getTime() - rd.getTime();
      const diffInDays = diffInMs / (1000 * 3600 * 24);
      p.pca=diffInDays;
      
      }
      
    }
   
    
  }

  //calculating the delivery period
  caldelperiod(){
    for(const p of this.ddata){
      if(p.delivery==true){
      const rd=new Date(p.pdod);
      const cd=new Date();
      const diffInMs = cd.getTime() - rd.getTime();
      const diffInDays = diffInMs / (1000 * 3600 * 24);
      p.pdp=diffInDays;
      
      }
      
    }
    console.log(this.ddata);
  }

  //calculating children ages
  calchildage(){
    
    for(const c of this.cdata){
      const rd=new Date(c.cdob);
      const cd=new Date();
      const diffInMs = cd.getTime() - rd.getTime();
      const diffInDays = diffInMs / (1000 * 3600 * 24);
      c.cage=diffInDays;
      
    }
    
  }

  //close the div...
  closeFun(){
    
    this.closer='none';
    console.log('kkk',this.closer);
   
  }

}
