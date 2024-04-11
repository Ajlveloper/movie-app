import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-section',
  standalone: true,
  imports: [],
  templateUrl: './heading-section.component.html',
  styleUrl: './heading-section.component.scss'
})
export class HeadingSectionComponent {
  @Input() text?: string;
}
