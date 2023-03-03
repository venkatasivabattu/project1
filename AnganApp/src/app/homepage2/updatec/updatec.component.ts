import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-updatec',
  templateUrl: './updatec.component.html',
  styleUrls: ['./updatec.component.css']
})
export class UpdatecComponent implements OnInit {

  fdata;
  aid;
  data:any={};
  fin;
  constructor(private ds:DashboardService,private router:Router) { }

  ngOnInit() {
    this.data=sessionStorage.getItem('uobj');
    if(this.data==null||this.data==undefined){
      this.router.navigate(['../../home2/View/c']);
    }
    sessionStorage.removeItem('uobj');
    this.fin=JSON.parse(this.data);
    this.aid=sessionStorage.getItem('aid');
    const dob=new Date(this.fin.cdob);
    const cdob = dob.toISOString().substring(0, 10);
    
    
    this.fdata=new FormGroup({
      aid:new FormControl(this.aid),
      cuid:new FormControl(this.fin.cuid),
      cname:new FormControl(this.fin.cname),
      cdob:new FormControl(cdob),
      cgen:new FormControl(this.fin.cgen),
      muid:new FormControl(this.fin.muid),
      mname:new FormControl(this.fin.mname),
      mmobile:new FormControl(this.fin.mmobile),
      cstreet:new FormControl(this.fin.ctreet),
      cvil:new FormControl(this.fin.cvil),
      cmandal:new FormControl(this.fin.cmandal),
      cdistrict:new FormControl(this.fin.cdistrict),
      cstate:new FormControl(this.fin.cstate),
      cpincode:new FormControl(this.fin.cpincode),
      schooling:new FormControl(this.fin.schooling)
      
    });
    
  }
  updateChild(fdata){
    const data:any={};
    const rd=new Date(fdata.cdob);
    const cd=new Date();
    const age=cd.getFullYear()-rd.getFullYear();
    if(age>=4){
      fdata.schooling=1;
    }
    else{
      fdata.schooling=0;
    }
    console.log(fdata);
    if(cd.getFullYear()-rd.getFullYear()>=4){
      this.fdata.schooling=1;
    }
    else{
      this.fdata.schooling=0;
    }
    
    data['tdata']=fdata;
    data['id']=this.fin.cuid;
    console.log(data);
    this.ds.updateChildren(data).subscribe(
      (res)=>{
        if(res.submit){
          console.log(res);
        alert('Record Updated successfully....');
        this.router.navigate(['../../home2/View/c']);
        }
        else{
          console.log(res);
          alert('please enter valid details....');
        }
      },
      (err)=>{
        alert(err);
      }
    
  );


  

    
  

  }
}
