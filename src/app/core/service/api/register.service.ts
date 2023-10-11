import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  API:any = environment.baseAPI;
  constructor(private http: HttpClient) {}

  registerData(inputData: any) {
    return this.http.post(this.API, inputData);
  }

  get() {
    return this.http.get(this.API);
  }
  add(data: any){
    return this.http.post(this.API, data);
  }
  delete(id: number){
    return this.http.delete(this.API + '/' + id);
  }
  update(data: any){
    return this.http.put(this.API + '/' + data.id, data);
  }
  searchUser(eventdata: any, value: any) {
    return of(
      eventdata.filter((items: any) => {
        return JSON.stringify(items.FirstName)
          .toLocaleLowerCase()
          .includes(value);
      })
    );
  }
}
