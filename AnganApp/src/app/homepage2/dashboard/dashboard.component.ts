import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  wid;
  aid;
  wc;
  cc;
  constructor(private ds:DashboardService) { }

  ngOnInit() {
    this.wid=this.get('wid');
    this.aid=this.get('aid');
    this.getCount(this.aid);
  }
  get(key: string): any {
    return JSON.parse(sessionStorage.getItem(key));
  }
  getCount(aid){
    this.ds.getCount(aid).subscribe(
      (res)=>{
        console.log(res.result1[0]['count(*)']);
        this.wc=res.result1[0]['count(*)']
        console.log(res.result2[0]['count(*)']);
        this.cc=res.result2[0]['count(*)']

      },
      (err)=>{}

      );
    
  }

}
