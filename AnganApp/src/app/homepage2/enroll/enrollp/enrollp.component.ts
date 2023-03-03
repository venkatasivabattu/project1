import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-enrollp',
  templateUrl: './enrollp.component.html',
  styleUrls: ['./enrollp.component.css']
})
export class EnrollpComponent implements OnInit {
  fdata;
  aid;
  constructor(private ds:DashboardService,private router:Router) { }

  ngOnInit() {
    this.aid=sessionStorage.getItem('aid');
    this.fdata=new FormGroup({
      aid:new FormControl(this.aid),
      puid:new FormControl(""),
      pname:new FormControl(''),
      pdob:new FormControl(""),
      pdoc:new FormControl(""),
      pmobile:new FormControl(""),
      guid:new FormControl(""),
      gname:new FormControl(""),
      gmobile:new FormControl(""),
      relation:new FormControl(""),
      pstreet:new FormControl(""),
      pvil:new FormControl(""),
      pmandal:new FormControl(""),
      pdistrict:new FormControl(""),
      pstate:new FormControl(""),
      ppincode:new FormControl(""),
      
    });
    
  }
  postWomen(fdata:any){
    console.log(fdata);
    const db=new Date(fdata.pdob);
    const cd=new Date();
    const yg=cd.getFullYear()-db.getFullYear();
    
    const dc=new Date(fdata.pdoc);
    const mg=dc.getFullYear()-db.getFullYear();
    console.log(db,cd,yg);
    console.log('hi',dc,mg);
    
    console.log(fdata.pname);
    if(fdata.pname=='' || fdata.puid=='' ||fdata.dob=='' ||fdata.doc=='' ||fdata.guid=='' ||fdata.gname=='' ||fdata.pvil=='' ||fdata.pmandal=='' ||fdata.pdistrict=='' ||fdata.pstate=='' ||fdata.ppincode==''||fdata.pname==null || fdata.puid==null ||fdata.guid==null ||fdata.gname==null ||fdata.pvil==null||fdata.pmandal==null ||fdata.pdistrict==null ||fdata.pstate==null ||fdata.ppincode==null){
      
      alert('fill alll required cells.........');
    }
    else if(yg<18){
      alert("Age should be greater than 18....");
    }
    else
    {
      
      this.ds.postWomen(fdata).subscribe(
        (res)=>{
          if(res.submit){
            
            alert("data inserted successfully...........");
            this.fdata.reset();
            this.router.navigate(['../../home2/View/p'])
          }
          else{
            alert('please enter valid details...');
            console.log(res.err);
          }
        },
        (err)=>{
          alert(err);
          console.log(err);
        }
      );
    }
    

  }

}
