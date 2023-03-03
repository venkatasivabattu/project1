import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { anganwadi } from 'src/app/models/anganwadi.model';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
search;
datanotfound:boolean=false;
angan:anganwadi[];
  constructor(private service:MyserviceService) { }

  ngOnInit() {
  }
  searchFor(){
    if(this.search.length==0){
      
    }
    else{
      this.angan=[];

    this.service.searchFor(this.search).subscribe(
      (res)=>{
        console.log(res);
        this.angan=res.result;
        if(res.result.length==0){
          alert('No Data Found!!!');
        }

        console.log(this.angan);
      },
      (err)=>{
        alert(err.error);
      }
    );

  }
  }
}


