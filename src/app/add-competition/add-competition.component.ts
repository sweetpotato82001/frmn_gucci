import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.css']
})
export class AddCompetitionComponent implements OnInit {
  public competition={
    
    worldwide:false,
    africa:false,
    morocco:false,
    meeting:false,
    
    all_cat:false,
    rec_by_cat:false,
    both:false,
    hidden:false,
   };
  constructor() { }
   click1(){
      this.competition.rec_by_cat=false;
      this.competition.both=false;
   }
   click2(){
    this.competition.all_cat=false;
    this.competition.both=false;
   }
   click3(){
       this.competition.all_cat=false;
       this.competition.rec_by_cat=false;
   }
   click4(){
    
      this.competition.hidden =!this.competition.hidden;
    
   
   }
  ngOnInit(): void {
  }

}
