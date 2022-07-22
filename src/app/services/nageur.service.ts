import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class NageurService {

  constructor(private http:HttpClient) { }
  public nageurs(){
    return this.http.get(`${baseUrl}/admin/nageurs`);
  }
}
