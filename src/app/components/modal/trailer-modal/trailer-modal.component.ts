import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PrimaryButtonComponent } from '../../buttons/primary-button/primary-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-trailer-modal',
  standalone: true,
  imports: [
    MatDialogContent,
    PrimaryButtonComponent,
    MatIconModule,
    MatButtonModule,
    MatDialogClose
  ],
  templateUrl: './trailer-modal.component.html',
  styleUrl: './trailer-modal.component.scss'
})
export class TrailerModalComponent implements OnInit {
  @Output() handleCloseEmitter = new EventEmitter();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { videoId: string },
    private sanitizer: DomSanitizer
  ) { }

  url?: SafeResourceUrl;
  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.data.videoId}`);
  }

  handleClose() {
    this.handleCloseEmitter.emit();
  }
}
