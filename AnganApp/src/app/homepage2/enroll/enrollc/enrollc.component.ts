import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-enrollc',
  templateUrl: './enrollc.component.html',
  styleUrls: ['./enrollc.component.css']
})
export class EnrollcComponent implements OnInit {
  fdata;
  aid;
  data;

  constructor(private ds:DashboardService,private r:Router) { }

  ngOnInit() {
    
    
    this.data=sessionStorage.getItem('obj');
    sessionStorage.removeItem('obj');
    const fin=JSON.parse(this.data);
    this.aid=sessionStorage.getItem('aid');
    console.log(fin,'ssssss');
    if(fin==null){
      
      this.fdata=new FormGroup({
        aid:new FormControl(this.aid),
        cuid:new FormControl(""),
        cname:new FormControl(''),
        cdob:new FormControl(""),
        cgen:new FormControl(""),
        muid:new FormControl(""),
        mname:new FormControl(""),
        mmobile:new FormControl(""),
        schooling:new FormControl("0"),
        cstreet:new FormControl(""),
        cvil:new FormControl(""),
        cmandal:new FormControl(""),
        cdistrict:new FormControl(""),
        cstate:new FormControl(""),
        cpincode:new FormControl(""),
        
      });
    }
    else{
      const dod=new Date(fin.pdod);
      const isoDate = dod.toISOString().substring(0, 10);
      console.log(dod,'ddddd',isoDate,'iiiiiii');
      this.fdata=new FormGroup({
        aid:new FormControl(this.aid),
        cuid:new FormControl(""),
        cname:new FormControl(''),
        cdob:new FormControl(isoDate),
        cgen:new FormControl(""),
        muid:new FormControl(fin.puid),
        mname:new FormControl(fin.pname),
        mmobile:new FormControl(fin.pmobile),
        schooling:new FormControl("0"),
        cstreet:new FormControl(fin.pstreet),
        cvil:new FormControl(fin.pvil),
        cmandal:new FormControl(fin.pmandal),
        cdistrict:new FormControl(fin.pdistrict),
        cstate:new FormControl(fin.pstate),
        cpincode:new FormControl(fin.ppincode),
        
      });
    }
    
  }
  postChild(fdata){
    if(fdata.cname=='' || fdata.cuid=='' ||fdata.cdob=='' ||fdata.cgen=='' ||fdata.muid=='' ||fdata.mname=='' ||fdata.cvil=='' ||fdata.cmandal=='' ||fdata.pcistrict=='' ||fdata.cstate=='' ||fdata.cpincode==''||fdata.cname==null || fdata.cuid==null ||fdata.muid==null ||fdata.mname==null ||fdata.cvil==null||fdata.cmandal==null ||fdata.cdistrict==null ||fdata.cstate==null ||fdata.cpincode==null){
      
      alert('fill alll required cells.........');
    }
    else{
      const rd=new Date(fdata.cdob);
      const cd=new Date();
      if(cd.getFullYear()-rd.getFullYear()>=4){
        fdata.schooling=true;
      }
      this.ds.postChild(fdata).subscribe(
        (res)=>{
          if(res.submit){
            alert("data inserted sucessfully...........");
            this.fdata.reset();
            this.r.navigate(['../../home2/View/c'])
          }
          else{
            alert("enter valid details...");
            console.log(res.err);
          }
        },
        (err)=>{
          alert(err);
        }
      );
      }
  }

}
