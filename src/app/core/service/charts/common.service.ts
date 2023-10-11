import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _httpClient:HttpClient) { }

  APIURL = 'http://localhost:5000/chartData';
  showData(){
    return this._httpClient.get(this.APIURL)
  }
}
