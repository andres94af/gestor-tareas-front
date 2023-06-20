import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from './model/models';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'http://localhost:8080/api/v1/tareas';

  getAll() {
    return this.http.get(this.apiUrl);
  }

  create(tarea: Tarea) {
    return this.http.post(this.apiUrl, tarea);
  }

  update(tarea: Tarea) {
    return this.http.put(this.apiUrl, tarea);
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
