import { Exp } from './../models/exp';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ExperianceService {
  private apiUrl: string = 'http://localhost:5000/experience';

  constructor(private http: HttpClient) {}

  getExperience(): Observable<Exp[]> {
    return this.http.get<Exp[]>(this.apiUrl);
  }

  addExperience(experience: Exp): Observable<Exp> {
    return this.http.post<Exp>(this.apiUrl, experience, httpOptions);
  }

  deleteExperience(experience: Exp): Observable<Exp> {
    const url = `${this.apiUrl}/${experience.id}`;
    return this.http.delete<Exp>(url);
  }
}
