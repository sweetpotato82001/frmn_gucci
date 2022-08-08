import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-competition-form',
  templateUrl: './edit-competition-form.component.html',
  styleUrls: ['./edit-competition-form.component.css']
})
export class EditCompetitionFormComponent implements OnInit {
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
  click4(){
    
    this.competition.hidden =!this.competition.hidden;
  
 
 }
  ngOnInit(): void {
  }

}
