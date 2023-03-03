import { Component, OnInit } from '@angular/core';

import { children } from 'src/app/models/children.model';
import { pregnants } from 'src/app/models/pregnants.model';
import { DashboardService } from 'src/app/services/dashboard.service';
import {vaccines,dosages, vaccinations } from 'src/app/models/vaccines.model'
import { VaccinationService } from 'src/app/services/vaccination.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit {
  //searchfor vars beg
  fvfor:string='';
  fvaccine:string=''
  fvaccines;
  fdosage;
  fdosages;
  fstatus;
  fdata:vaccinations[];
  nodata;
  ngOnInitvar=true;
  //searchfor vars end


  childrens:children[];
  pregnants:pregnants[];
  vaccines:vaccines[];
  dosages:dosages[];
  aid;

  constructor(private ds:DashboardService,private v:VaccinationService,private router:Router) {
    
  }
  ngOnInit() {
    
    this.aid=sessionStorage.getItem('aid');
    this.v.getAllVacDetails().subscribe(
      (res)=>{
        this.vaccines=res.result1;
        this.dosages=res.result2;
  
        this.ds.getAllWomen(this.aid).subscribe(
          (res1)=>{
            
            this.ds.getAllChildren(this.aid).subscribe((res2)=>{
              this.pregnants=res1.result;
              this.childrens=res2.result;
              this.vaccinator();
            },
            (err)=>{
              alert(err);
            });
            
          }
        );
      },
      (err)=>{}
    );
    
    
  }
  vaccinator(){
    this.calcarryage();
    this.calchildage();
    for(const v of this.vaccines){
      //pregnants testing begin
      if(v.vfor=='p'){
        
        for(const d of this.dosages){
           if(d.vid==v.vid){
            for(const p of this.pregnants){
              if(p.delivery==false){
                if(p.pca>=d.start){
                    const data={};
                    data['aid']=this.aid;
                    data['vid']=d.vid;
                    data['did']=d.did;
                    data['uid']=p.puid;
                    data['uname']=p.pname;
                    
                    this.v.checkforVaccination(data).subscribe(
                      (res)=>{
                        if(res.result && res.result[0]['count(*)']==0) {
                          this.poster(data);
                        }
                          
                        },
                      (err)=>{}
                    );
                  
                      }
                    }
                  }
           }
           }
          
          }//pregnats testing ended
          //child testing started
          else{
            for(const d of this.dosages){
              if(d.vid==v.vid){
                for(const c of this.childrens){
                  if(c.cage>=d.start){
                    const data={};
                    data['aid']=this.aid;
                    data['vid']=d.vid;
                    data['did']=d.did;
                    data['uid']=c.cuid;
                    data['uname']=c.cname;
                    this.v.checkforVaccination(data).subscribe(
                      (res)=>{
                        if(res.result && res.result[0]['count(*)']==0) {
                          this.poster(data);
                        }
                          
                        },
                      (err)=>{}
                    );

                  }
                }
              }
            }

          }
        }
      }
      



  //calculates the age of the carry
  calcarryage(){
    for(const p of this.pregnants){
      if(p.delivery==false){
      const rd=new Date(p.pdoc);
      const cd=new Date();
      const diffInMs = cd.getTime() - rd.getTime();
      const diffInDays = diffInMs / (1000 * 3600 * 24);
      p.pca=diffInDays;
      
      }
    }
    
  }

  //calculating children ages
  calchildage(){
    
    for(const c of this.childrens){
      const rd=new Date(c.cdob);
      const cd=new Date();
      const diffInMs = cd.getTime() - rd.getTime();
      const diffInDays = diffInMs / (1000 * 3600 * 24);
      c.cage=diffInDays;
      
    }
    
  }


  //posting of the info to db
  poster(data){
    
    this.v.postVaccination(data).subscribe(
      (res)=>{
      },
      (err)=>{
        alert('err');
      }
    )


  }
  //for vaccine search form
  vforfun(){
    console.log(this.fvfor)
    this.fvaccine='';
    this.fdosage='';
    this.fstatus='';
    this.v.getFvaccines(this.fvfor).subscribe((res)=>{
      this.fvaccines=res.result;
      console.log(res.result);
    },
    (err)=>{
      console.log(err);
    });
  }
  vaccinefun(){
    this.fdosage='';
    this.fstatus=''
    console.log(this.fvaccine)
    this.v.getFdosages(this.fvaccine).subscribe((res)=>{
      this.fdosages=res.result;
      console.log(res.result);
    },
    (err)=>{
      console.log(err);
    });
  }
  getVaccinations(){
    
    this.nodata=null;
    const data={};
    data['aid']=this.aid;
    data['vid']=this.fvaccine;
    data['did']=this.fdosage;
    if(this.fstatus=='d'){
      data['status']=true;
    }
    else if(this.fstatus=='n'){
      data['status']=false;
    
    }
    else{
      data['status']='hi';
    
    }
    
    console.log(data);
    this.v.getVaccinations(data).subscribe((res)=>{

      this.fdata=res.result;
      if(res.result.length==0){
        this.nodata="NO DATA FOUND....."
      }
      else{
        this.nodata='';
      }
    },
    (err)=>{
      console.log(err)
    });
  }

  //marking the vaccinations as vaccinated
  markVaccination(v){
    console.log(v,'hiii');
    this.v.markVaccination(v).subscribe(
      (res)=>{
        this.getVaccinations();
        
      },
      (err)=>{}
          );
  }

  //view vaccine in details dosages and vcacinations 
  viewVaccine(o){
    console.log(o);
    this.router.navigate(['./home2/viewV',{id:o.vid}]);
  }


}

