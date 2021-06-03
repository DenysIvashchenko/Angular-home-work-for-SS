import { ExperianceService } from './../../services/experiance.service';
import { Exp } from './../../models/exp';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  experience!: Exp[];

  constructor(private experianceService: ExperianceService) {}

  getExperiance(): void {
    this.experianceService
      .getExperience()
      .subscribe((experience) => (this.experience = experience));
  }

  ngOnInit(): void {
    this.getExperiance();
  }
}
