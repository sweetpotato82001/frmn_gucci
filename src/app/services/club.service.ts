import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http:HttpClient) { }
  public clubs(){
    return this.http.get(`${baseUrl}/admin/clubs`);
  }
}
