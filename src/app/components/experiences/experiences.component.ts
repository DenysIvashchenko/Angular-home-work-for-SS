import { Exp } from './../../models/exp';
import { Component, OnInit } from '@angular/core';
import { EXP } from '../../mock-exp';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  experience: Exp[] = EXP;

  constructor() {}

  ngOnInit(): void {}
}
