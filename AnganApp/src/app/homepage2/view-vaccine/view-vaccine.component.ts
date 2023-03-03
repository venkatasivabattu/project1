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
  constructor(private r:Router,private ar:ActivatedRoute,private vs:VaccinationService) { }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.vs.getVaccine_Dosage(params['id']).subscribe(
        (res)=>{
          this.vdata=res.res1;
          this.ddata=res.res2;
          console.log(this.vdata,this.ddata);
        },
        (err)=>{}
      );
      
    });
  }

}
