import { Injectable, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TrailerModalComponent } from '../../components/modal/trailer-modal/trailer-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modal = inject(MatDialog)

  handleShowModal(videoId: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = 900;
    dialogConfig.width = '100%';
    dialogConfig.panelClass = 'trailer-modal';
    dialogConfig.id = 'trailer-modal';
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      videoId
    }
    this.modal.open(TrailerModalComponent, dialogConfig)
  }


  handleClose() {
    this.modal.closeAll();
  }
}
