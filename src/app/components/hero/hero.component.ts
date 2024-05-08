import { DatePipe, NgStyle } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../buttons/primary-button/primary-button.component';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { TrailerModalComponent } from '../modal/trailer-modal/trailer-modal.component';
import { ModalService } from '../../services/modal/modal.service';

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
  modalService = inject(ModalService);


  handleShowModal() {
    this.modalService.handleShowModal(this.videoId!)
  }

  handleClose() {
    this.modalService.handleClose();
  }
}
