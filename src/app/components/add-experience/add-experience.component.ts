import { Exp } from './../../models/exp';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss'],
})
export class AddExperienceComponent {
  @Output() onAddExperience: EventEmitter<Exp> = new EventEmitter();
  company!: string;
  city!: string;
  position!: string;
  from!: string;
  to!: string;
  description!: string;

  onSubmit(): void {
    if (
      !this.company &&
      !this.city &&
      !this.position &&
      !this.description &&
      !this.from
    ) {
      alert('fill up the form');
      return;
    }

    const newExperience: Exp = {
      company: this.company,
      city: this.city,
      position: this.position,
      from: this.from,
      to: this.to,
      description: this.description,
    };

    this.onAddExperience.emit(newExperience);

    this.company = '';
    this.city = '';
    this.position = '';
    this.from = '';
    this.to = '';
    this.description = '';
  }

  constructor() {}
}
