import { Exp } from './../models/exp';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExperianceService {
  private apiUrl = 'http://localhost:5000/experience';

  constructor(private http: HttpClient) {}

  getExperience(): Observable<Exp[]> {
    return this.http.get<Exp[]>(this.apiUrl);
  }
}
