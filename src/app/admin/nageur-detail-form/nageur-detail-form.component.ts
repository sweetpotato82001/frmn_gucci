import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import * as  countriesData from '../../services/countries.json'
@Component({
  selector: 'app-nageur-detail-form',
  templateUrl: './nageur-detail-form.component.html',
  styleUrls: ['./nageur-detail-form.component.css']
})
export class NageurDetailFormComponent implements OnInit {
  countries: any = (countriesData as any).default;
 
  public nageur={
   nom:'',
   prenom:'',
   sexe:'',
   date_naissance:'',
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
   lieu_naissance:'',
   responsable:'',
   federation:'',
   club:'',
   type_licence1:'',
   type_licence2:'',
   type_licence3:'',
   maitre:false,
   dirigeant:false,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
