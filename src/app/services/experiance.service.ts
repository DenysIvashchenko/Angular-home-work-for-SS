import { EXP } from './../mock-exp';
import { Exp } from './../models/exp';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperianceService {
  constructor() {}

  getExperience(): Exp[] {
    return EXP;
  }
}
