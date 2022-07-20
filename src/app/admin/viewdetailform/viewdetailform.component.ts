import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import * as  countriesData from '../../services/countries.json'
@Component({
  selector: 'app-viewdetailform',
  templateUrl: './viewdetailform.component.html',
  styleUrls: ['./viewdetailform.component.css']
})
export class ViewdetailformComponent implements OnInit {
  countries: any = (countriesData as any).default;
  public club={
    countries:'',
    inter_region:'',
    region:'',
    departement:'',
    code:'',
    name:'',
    email:'',
    summer_club:false,
    sportive:false,
    synchro:false,
    water_polo:false,
    plongeon:false,
    eau_libre:false,
    adresse:'',
    supplement_adresse:'',
    zip:'',
    local:'',
    telephone:'',
    fax:'',
    
   };
  constructor() { }

  ngOnInit(): void {
  }
  addClub(){
    
  }
}
