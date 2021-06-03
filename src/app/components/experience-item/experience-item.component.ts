import { Exp } from './../../models/exp';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
})
export class ExperienceItemComponent implements OnInit {
  @Input() experience!: Exp[];
  constructor() {}

  ngOnInit(): void {}
}
