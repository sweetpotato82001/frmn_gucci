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
    
    
    
   };
  constructor() { }

  ngOnInit(): void {
  }

}
