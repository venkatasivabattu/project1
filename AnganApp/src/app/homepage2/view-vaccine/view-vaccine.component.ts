import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationService } from 'src/app/services/vaccination.service';

@Component({
  selector: 'app-view-vaccine',
  templateUrl: './view-vaccine.component.html',
  styleUrls: ['./view-vaccine.component.css']
})
export class ViewVaccineComponent implements OnInit {
  vdata;
  ddata;
  cd;
  status;
  doseid;
  fdata;
  nodata=false;

  constructor(private r: Router, private ar: ActivatedRoute, private vs: VaccinationService) { }

  ngOnInit() {
    this.cd='';
    this.ar.params.subscribe(params => {
      this.vs.getVaccine_Dosage_Vacinations(params['id']).subscribe(
        (res) => {
          this.vdata = res.res1;
          this.ddata = res.res2;
          
          console.log(res)
        },
        (err) => { }
      );
    });
  }
  doseFun(d){
    this.status=''
    this.cd='-Dose '+d.dn;
    this.doseid=d.did;
    console.log(this.cd)
    const data={};
    data['vid']=this.vdata[0].vid;
    data['did']=d.did;
    data['status']='hi';
    data['aid']=sessionStorage.getItem('aid');
    this.vs.getVaccinations(data).subscribe((res)=>{
        this.fdata=res.result;
        if(res.result.length==0){
          this.nodata=true;
        }
        else{
          this.nodata=false;
        }
    },
    (err)=>{

    });
  }
  statusFun(){
    const data={};
    data['vid']=this.vdata[0].vid;
    data['did']=this.doseid;
    data['status']=this.status;

    data['aid']=sessionStorage.getItem('aid');
    console.log(data);
    this.vs.getVaccinations(data).subscribe((res)=>{
      if(res.result.length==0){
        this.nodata=true;
        
      }
      else{
        this.nodata=false;
      }
        this.fdata=res.result;
        console.log(res.result.length,this.nodata)
        
    },
    (err)=>{

    });
  }
  //marking the vaccinations as vaccinated
  markVaccination(v){
   
    this.vs.markVaccination(v).subscribe(
      (res)=>{
        console.log(this.status,'ssssss')
        this.status='hi';
        this.statusFun();

       
      },
      (err)=>{}
          );
  }


  //back navigartion
  backFun(){
    this.r.navigate(['/home2/vaccines'])
  }
}
