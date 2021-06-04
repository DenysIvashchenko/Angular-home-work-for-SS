import { UiService } from './../../services/ui.service';
import { ExperianceService } from './../../services/experiance.service';
import { Exp } from './../../models/exp';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit, OnDestroy {
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

  deleteExperience(experience: Exp) {
    this.experianceService
      .deleteExperience(experience)
      .subscribe(
        () =>
          (this.experience = this.experience.filter(
            (exp) => exp.id !== experience.id
          ))
      );
  }

  toggleAddExperience(): void {
    this.uiService.toggleAdd();
  }

  ngOnInit(): void {
    this.getExperiance();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
