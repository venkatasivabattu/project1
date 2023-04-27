import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { MyserviceService } from '../myservice.service';
import { SessionManagementService } from 'src/app/services/session-management.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log:any={};
  aid:string;
  
  constructor(private router: Router,private service:MyserviceService,private mysession:SessionManagementService) { }

  ngOnInit() {
    if(sessionStorage.length>0){
      alert("please LogOut....");
      this.router.navigate(['./home2'])
      
    }
    
  }
  authenticate(data){
    
    if(data.uname.length==0 || data.password.length==0){
      alert('fill all cells');
    }
    else{
      this.log.uname=data.uname;
      this.log.pw=data.password;
      
      
      this.service.authenticate(this.log.uname).subscribe(
        (res)=>{
          
          
          if(res.result.length>=1){
            if(res.result[0].password==this.log.pw){
              this.mysession.set('wid',this.log.uname);
              this.getAid(this.log.uname);
              
              
            }
            else{
              alert('incorrect password')
              
            }
            
          }
          else{
            alert('invalid username');
            
          }

        },
        (err)=>{
          alert(err.error);
        }
      );

      }
      
    }
    getAid(wid){
      this.service.getAid(wid).subscribe(
        (res)=>{
          this.mysession.set('aid',res.result[0].aid);
          this.mysession.set('wname',res.result[0].wname);
          this.aid=res.result[0].aid;
          this.router.navigate(['../home2']);
          console.log(res.result[0].wname);
        },
        (err)=>{
          alert(err);
        }
      );

    }
    
  }
  
  


