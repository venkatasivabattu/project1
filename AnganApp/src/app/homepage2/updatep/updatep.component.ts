import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-updatep',
  templateUrl: './updatep.component.html',
  styleUrls: ['./updatep.component.css']
})
export class UpdatepComponent implements OnInit {

  fdata;
  aid;
  data;
  fin;
  pdod;
  constructor(private ds:DashboardService,private router:Router) { }

  ngOnInit() {
    this.data=sessionStorage.getItem('uobj');
    if(this.data==null||this.data==undefined){
      this.router.navigate(['../../home2/View/p']);
    }
    sessionStorage.removeItem('uobj');
    this.fin=JSON.parse(this.data);
    console.log(this.fin,'ssssss');
    this.aid=sessionStorage.getItem('aid');
    const dob=new Date(this.fin.pdob);
    const pdob = dob.toISOString().substring(0, 10);
    const doc=new Date(this.fin.pdoc);
    const pdoc = doc.toISOString().substring(0, 10);
    
    
    if(this.fin.dod==null){
       this.pdod=null;
    }
    else{
        const dod=new Date(this.fin.pdod);
      
      this.pdod = dod.toISOString().substring(0, 10);
    }
    this.fdata=new FormGroup({
      aid:new FormControl(this.aid),
      puid:new FormControl(this.fin.puid),
      pname:new FormControl(this.fin.pname),
      pdob:new FormControl(pdob),
      pdoc:new FormControl(pdoc),
      delivery:new FormControl(this.fin.delivery),
      pdod:new FormControl(this.pdod),
      pmobile:new FormControl(this.fin.pmobile),
      guid:new FormControl(this.fin.guid),
      gname:new FormControl(this.fin.gname),
      gmobile:new FormControl(this.fin.gmobile),
      relation:new FormControl(this.fin.relation),
      pstreet:new FormControl(this.fin.ptreet),
      pvil:new FormControl(this.fin.pvil),
      pmandal:new FormControl(this.fin.pmandal),
      pdistrict:new FormControl(this.fin.pdistrict),
      pstate:new FormControl(this.fin.pstate),
      ppincode:new FormControl(this.fin.ppincode),
      
    });
    
  }
  updateWomen(fdata){
    const data={};
    data['tdata']=fdata;
    data['id']=this.fin.puid;
    console.log(data,fdata,'jiii');
    if(fdata.delivery==1 && fdata.pdod==null){
      
        alert("please enter date of delivery....");
      
    }
    else{

        this.ds.updateWomen(data).subscribe(
          (res)=>{
            if(res.submit){
              console.log(res);
            alert('Record Updated successfully....');
            this.router.navigate(['../../home2/View/p']);
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

}
