import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-outline-button',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './outline-button.component.html',
  styleUrl: './outline-button.component.scss'
})
export class OutlineButtonComponent {
  @Input() text:string = '';
  @Input() icon:string = '';
  @Output() handleClickEmitter =  new EventEmitter();

  handleClick() {
    this.handleClickEmitter.emit();
  }

}
