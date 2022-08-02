import { Component, OnInit } from '@angular/core';
import{CompetitionService } from '../../services/competition.service';
import Swal from 'sweetalert2';
import { ButtonDetailCRendererComponent } from '../../services/button-detail-c-renderer/button-detail-c-renderer.component';
@Component({
  selector: 'app-history-competition',
  templateUrl: './history-competition.component.html',
  styleUrls: ['./history-competition.component.css']
})
export class HistoryCompetitionComponent implements OnInit {

  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true},
    {headerName:"Competition",field:"competition_name" , sortable:true,filter:true},
    {headerName:"Start debut",field:"date_debut", sortable:true,filter:true},
    {headerName:"Place",field:"lieu", sortable:true,filter:true},
    {headerName:"Bassin",field:"bassin", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer:ButtonDetailCRendererComponent},
  ];
  frameworkComponents = {
    btnCellRenderer: ButtonDetailCRendererComponent
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
  constructor(private competition:CompetitionService) { }

  ngOnInit(): void {
    
  }


}
