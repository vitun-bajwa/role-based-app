import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  API: any = environment.addTask;
  constructor(private http: HttpClient) {}

  add(data: any) {
    return this.http.post(this.API, data);
  }

  get() {
    return this.http.get(this.API);
  }

  update(data: any){
    return this.http.put(this.API + '/' + data.id, data);
  }
}
