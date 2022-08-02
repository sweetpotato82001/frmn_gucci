import { Component, OnInit } from '@angular/core';
import{CompetitionService } from '../../services/competition.service';
import Swal from 'sweetalert2';
import { ButtonDetailC1RendererComponent } from '../button-detail-c1-renderer/button-detail-c1-renderer.component';
@Component({
  selector: 'app-edit-competition',
  templateUrl: './edit-competition.component.html',
  styleUrls: ['./edit-competition.component.css']
})
export class EditCompetitionComponent implements OnInit {
  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true},
    {headerName:"Competition",field:"competition_name" , sortable:true,filter:true},
    {headerName:"Start debut",field:"date_debut", sortable:true,filter:true},
    {headerName:"Place",field:"lieu", sortable:true,filter:true},
    {headerName:"Bassin",field:"bassin", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer:ButtonDetailC1RendererComponent},
  ];
  frameworkComponents = {
    btnCellRenderer: ButtonDetailC1RendererComponent
  };
  competitions=[
    {
      id:0,
      competition_name:'',
      date_debut:'',
      lieu:'',
      bassin:'',
    },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
