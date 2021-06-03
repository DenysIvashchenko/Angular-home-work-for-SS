import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss'],
})
export class AddExperienceComponent {
  company!: string;
  position!: string;
  from!: string;
  to!: string;
  description!: string;

  onSubmit(): void {
    if (!this.company) {
      alert('add company');
      return;
    }
  }

  constructor() {}
}
