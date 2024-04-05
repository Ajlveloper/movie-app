import { DatePipe, NgStyle } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../buttons/primary-button/primary-button.component';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { TrailerModalComponent } from '../modal/trailer-modal/trailer-modal.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgStyle,
    DatePipe,
    PrimaryButtonComponent,
    MatDialogModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() backdrop: string = '';
  @Input() year?: Date;
  @Input() title: string = '';
  @Input() overview: string = '';
  @Input() poster: string = '';
  @Input() videoId?: string;
  modal = inject(MatDialog)


  handleShowModal() {    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = 900;
    dialogConfig.width = '100%';
    dialogConfig.panelClass = 'trailer-modal';
    dialogConfig.id = 'trailer-modal';
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      videoId: this.videoId
    }
    this.modal.open(TrailerModalComponent, dialogConfig)
  }

  handleClose() {
    this.modal.closeAll();
  }
}
