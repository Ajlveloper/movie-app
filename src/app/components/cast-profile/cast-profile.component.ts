import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cast-profile',
  standalone: true,
  imports: [
    NgIf,
    MatIconModule
  ],
  templateUrl: './cast-profile.component.html',
  styleUrl: './cast-profile.component.scss'
})
export class CastProfileComponent {
  @Input() text?: string;
  @Input() image?: string;
}
