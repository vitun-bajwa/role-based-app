import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  API = environment.baseAPI;
  constructor(private http: HttpClient) {}

  registerData(inputData: any) {
    return this.http.post(this.API, inputData);
  }

  getUsers() {
    return this.http.get<any[]>(this.API);
  }
  addUser(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.API, data);
  }
  deleteUser(id: number): Observable<any[]> {
    return this.http.delete<any[]>(this.API + '/' + id);
  }
  updateUser(data: any): Observable<any[]> {
    return this.http.put<any[]>(this.API + '/' + data.id, data);
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
