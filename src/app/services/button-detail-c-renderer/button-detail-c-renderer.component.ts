import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { CompetitionService } from 'src/app/services/competition.service';
@Component({
  selector: 'app-button-detail-c-renderer',
  templateUrl: './button-detail-c-renderer.component.html',
  styleUrls: ['./button-detail-c-renderer.component.css']
})
export class ButtonDetailCRendererComponent implements OnInit {
  value :any;
  ngOnInit(): void {
    
  }

  constructor(private _router: Router,private _competition:CompetitionService){}

  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }
  // delete user
  onClickDeleteHandler(){
    
  }

}
