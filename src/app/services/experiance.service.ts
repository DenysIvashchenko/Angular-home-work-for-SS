import { EXP } from './../mock-exp';
import { Exp } from './../models/exp';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperianceService {
  constructor() {}

  getExperience(): Observable<Exp[]> {
    return of(EXP);
  }
}
