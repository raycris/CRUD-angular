import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TutorialModel } from '../models/tutorial/tutorial.model';

const API = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<TutorialModel[]> {
    return this.http.get<TutorialModel[]>(API);
  }

  get(id: any): Observable<TutorialModel> {
    return this.http.get(`${API}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(API, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${API}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${API}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(API);
  }

  findByTitle(title: any): Observable<TutorialModel[]> {
    return this.http.get<TutorialModel[]>(`${API}?title=${title}`);
  }
}
