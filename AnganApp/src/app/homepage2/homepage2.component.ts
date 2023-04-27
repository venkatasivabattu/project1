import { Component, OnInit } from '@angular/core';
import { SessionManagementService } from '../services/session-management.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage2',
  templateUrl: './homepage2.component.html',
  styleUrls: ['./homepage2.component.css']
})
export class Homepage2Component implements OnInit {
  wid:string;
  wname:string;
  constructor(private mysession:SessionManagementService,private router:Router) { }

  ngOnInit() {
    this.getValue();
    if (this.wid==null){
      this.wid='NULL'
      
    }
    if(sessionStorage.length==0){
      alert("please Make Sure That You are Logged in");
      this.router.navigate(['/../home1/login']);

    }
    
  }
  getValue(): void {
    this.wid=this.mysession.get('wid');
    this.wname=this.mysession.get('wname');
    this.wname=this.wname.split(" ")[0];
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['./home1/login']);
  }
 

}
