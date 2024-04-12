import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cast-profile',
  standalone: true,
  imports: [],
  templateUrl: './cast-profile.component.html',
  styleUrl: './cast-profile.component.scss'
})
export class CastProfileComponent {
  @Input() text?: string;
  @Input() image?: string;
}
