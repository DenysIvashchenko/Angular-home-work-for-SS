import { UiService } from './../../services/ui.service';
import { ExperianceService } from './../../services/experiance.service';
import { Exp } from './../../models/exp';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  experience!: Exp[];
  showAdd: boolean = false;
  subscription!: Subscription;

  constructor(
    private experianceService: ExperianceService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAdd = value));
  }

  getExperiance(): void {
    this.experianceService
      .getExperience()
      .subscribe((experience) => (this.experience = experience));
  }

  AddExperience(experience: Exp): void {
    this.experianceService
      .addExperience(experience)
      .subscribe((experience) => this.experience.push(experience));
  }

  toggleAddExperience(): void {
    this.uiService.toggleAdd();
  }

  ngOnInit(): void {
    this.getExperiance();
  }
}
