import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { IProfileCast } from '../../../models/movie-detail.model';
import { CastProfileComponent } from '../../cast-profile/cast-profile.component';
import { NgFor } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cast-modal',
  standalone: true,
  imports: [
    MatDialogContent,
    CastProfileComponent,
    NgFor,
    MatIconModule,
    MatButtonModule,
    MatDialogClose,
  ],
  templateUrl: './cast-modal.component.html',
  styleUrl: './cast-modal.component.scss'
})
export class CastModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { profileCast: IProfileCast[], text: string },
  ) { }
}
