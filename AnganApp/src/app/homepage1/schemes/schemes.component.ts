import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { schemes } from './schemes.model';



@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.css']
})
export class SchemesComponent implements OnInit {
  schemes$:schemes[];

  constructor(private service:MyserviceService) { }

  ngOnInit() {
    this.getSchemes();
  }
  
  getSchemes(){
    this.service.getAllSchemes().subscribe(
      (res)=>{
        this.schemes$=res.result;
        
      },
      (err)=>{
        alert(err.error);
      }
    );
  }
}

