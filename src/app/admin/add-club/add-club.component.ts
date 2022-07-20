import { Component, OnInit,ViewChildren,QueryList,ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import * as  countriesData from '../../services/countries.json'

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})

export class AddClubComponent implements OnInit {

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
    clear1(){
      this.club.countries='';
      this.club.inter_region='';
      this.club.region='';
      this.club.departement='';
      this.club.code='';
      this.club.name='';
      this.club.email='';


    }
    clear2(){
   this.club.summer_club=false;
   this.club.sportive=false;
   this.club.synchro=false;
   this.club.water_polo=false;
   this.club.plongeon=false;
   this.club.eau_libre=false;
    
    }
    clear3(){
      this.club.adresse="";
      this.club.supplement_adresse='';
      this.club.zip='';
      this.club.local='';
      this.club.telephone='';
      this.club.fax='';
    }

}
