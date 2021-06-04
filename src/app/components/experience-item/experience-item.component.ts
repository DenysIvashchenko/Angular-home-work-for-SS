import { Exp } from './../../models/exp';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
})
export class ExperienceItemComponent {
  @Input() experience!: Exp[];
  @Output() deleteExperience: EventEmitter<Exp> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}

  onDelete(experience: Exp): void {
    this.deleteExperience.emit(experience);
    console.log(experience);
  }
}
